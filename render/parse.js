import AstLeave from './ast';

function advance(html, n) {
    const tmp = html.substr(n);
    return tmp;
}

function parse(html) { 
    let _html = html;
    
    // 当前匹配的状态end_tag,start_tag,in_tag
    const tagState = {
        start: 'start_tag',
        in: 'in_tag',
        end: 'end_tag'
    }
    let curMatchTag = null;
    
    // 存储匹配到的开始标签以及标签状态 tagState   
    const tagStack = [];

    // 最终形成的ast
    const astTree = new AstLeave()
    // 当前操作的ast
    let curAstLeave = astTree;

    
    while(_html.length > 0) {
        
        // 匹配顶层开始标签名
        if(tagStack.length === 0) {
            let tagStartReg = /<([a-zA-Z0-9-])+[ >]/;
            const matchResult = _html.match(tagStartReg);
            // 尝试匹配开始标签
            if(matchResult && matchResult.index === 0) {
                const startTag = matchResult[0].slice(1, -1);
                if(curAstLeave.tag === null) {
                    // 当前ast为顶层节点时
                    curAstLeave.addTagName(startTag);
                } else {
                    // 当前ast为子节点时
                    const tmpAst = curAstLeave;
                    curAstLeave = new AstLeave();
                    curAstLeave.addTagName(startTag);
                    curAstLeave.addParent(tmpAst);
                    tmpAst.addChild(curAstLeave);
                }
                tagStack.push({
                    tag: startTag,
                    tagState: tagState.start
                });
                curMatchTag = tagStack.slice(-1)[0];
                _html = advance(_html, matchResult[0].length - 1);
            }
        }
        // 匹配开始标签中的属性和事件
        else if(curMatchTag && (curMatchTag.tagState === tagState.start)) {
            if(_html[0] === '>') {
                curMatchTag.tagState = tagState.in;
                _html = advance(_html, 1);
            } else {
                const attrReg = / ([:@]?[a-zA-Z0-9]+)="([a-zA-Z0-9_-]+)"[ >]/;
                const matchResult = _html.match(attrReg);
                if(matchResult && matchResult.index === 0) {   
                    let attrName = matchResult[1];
                    let attrValue = matchResult[2];
                    // 字面量属性
                    if(attrName[0] === ':') {
                        attrName = attrName.slice(1);
                        curAstLeave.addVariableAttribute(attrName, attrValue);
                    }
                    // 事件
                    else if(attrName[0] === '@') {
                        attrName = attrName.slice(1);
                        curAstLeave.addEvent(attrName, attrValue);
                    }
                    // 普通属性
                    else {
                        curAstLeave.addNormalAttribute(attrName, attrValue);
                    }
                    _html = advance(_html, matchResult[0].length - 1)
                }
            }
        }
        // 匹配文本节点以及子节点
        else if(curMatchTag && (curMatchTag.tagState === tagState.in)) {
            
            // 找到下一个新的标签或者当前标签的结束标签
            const tagReg = new RegExp(`(<([a-zA-Z0-9-])+[ >])|(</${tagStack.slice(-1)[0].tag}>)`);
            const matchResult = _html.match(tagReg);
            if(matchResult && matchResult.index > 0) {
                const text = _html.slice(0, matchResult.index);
                // 进行非空验证,去除只有回车和空格的情况
                const tmp_result = text.match(/\s+/);
                // 如果只有回车和空格，则将其过滤
                if(!(tmp_result && tmp_result[0].length === text.length)) {
                    // 插入文本节点
                    curAstLeave.addChild(text);
                }
                
                // 直接前进至下一个标签位置
                _html = advance(_html, matchResult.index);
            }
            // 如果碰到了新的子标签头 
            else if(matchResult && matchResult.index === 0 && !matchResult[0].includes('/')) {
                // 拿到标签名称
                const startTag = matchResult[0].slice(1, -1);
                const tmpAst = curAstLeave;

                // 插入新的标签到ast
                curAstLeave = new AstLeave();
                curAstLeave.addTagName(startTag);
                curAstLeave.addParent(tmpAst);
                tmpAst.addChild(curAstLeave);

                // 将新标签入栈
                tagStack.push({
                    tag: startTag,
                    tagState: tagState.start
                });
                curMatchTag = tagStack.slice(-1)[0];
                _html = advance(_html, matchResult[0].length - 1);
            }
            // 如果碰到标签尾
            else if(matchResult && matchResult.index === 0 && matchResult[0].includes('/')) {
                // 当前标签匹配结束并且将其出栈
                curMatchTag.tagState = tagState.end;
                tagStack.pop();
                // 更新当前匹配的标签
                curMatchTag = tagStack.slice(-1)[0];
                // 更新当前ast
                curAstLeave = curAstLeave.parent;

                _html = advance(_html, matchResult[0].length);
            }


        }
    }

    return astTree;
}

export default parse;