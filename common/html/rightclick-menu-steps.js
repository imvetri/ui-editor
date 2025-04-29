function showstepjson(e) {
    var srcElement
    if(m===false){srcElement = e.srcElement }
    if(m===true){srcElement=[...getElements()].filter(d=>d.id!=="focusPoint"&&d.id!=="verticalLine"&&d.id!=="horizontalLine"&&d.json).sort((a,b)=>a.volume-b.volume)[0]}

    while (srcElement.tagName !== "DIV") {
        srcElement = srcElement.parentElement
    }
        e.stopPropagation();
        window.currentbox = srcElement.json
        window.currentboxid = srcElement.json.index

        var s = create(c, document.body)
        open(s, {
            srcElement: srcElement,
            stopPropagation: e.stopPropagation.bind(e)
        })
    e.preventDefault();

}

document.addEventListener("contextmenu", showstepjson, true)
function open(opener, event) {
    opener.style.display = "inline-block";
    var rect = event.srcElement.getBoundingClientRect();
    opener.style.top = rect.top - document.body.getBoundingClientRect().top;
    opener.style.left = rect.left + rect.width - document.body.getBoundingClientRect().left;
    event.stopPropagation();
        if (opener.children.length > 0) {
        opener.children = opener.children || opener.getchildren();
        [...opener.children].forEach(child => {
            var pp;
            child.addEventListener("mouseover", (event) => {
                pp = document.createElement("span");
                pp.id = event.srcElement.id + "-content"
                pp.classList.add("CONTENT")
                if(event.srcElement.json.getchildren){ 
                    event.srcElement.json.children = event.srcElement.json.getchildren(event)
                }
                event.srcElement.json.children.forEach(child => {
                    pp.appendChild(create(child, document.body))
                }
                )
                document.body.appendChild(pp)
                open(pp, event, c)
                event.stopPropagation();
            }
            )
            child.addEventListener("mouseleave", (e) => {
                if (pp.id !== e.relatedTarget.id)
                    pp.style.display = "none"
                event.stopPropagation();
            }
            )
        }
        )
    } else {
        opener.addEventListener("mouseover", (event) => {
            var pp = document.createElement("span");
            pp.id = opener.id + "-content"
            pp.classList.add("CONTENT")
            c.children.forEach(child => {
                pp.appendChild(create(child, document.body))
            }
            )
            document.body.appendChild(pp)
            open(pp, event, c)
            event.stopPropagation();
        }
        )
        opener.addEventListener("mouseleave", (e) => {
            if (e.relatedTarget.parentElement === parent.parentElement)
                opener.style.display = "none";
            event.stopPropagation();
        }
        )
    }

}
function create(c, parent) {
    var s = document.createElement("span");
    s.innerText = c.name;
    s.style.diplay = "block"
    s.id = c.name;
    s.classList.add("ITEM")
    s.addEventListener("click", c.click)
    s.json = c;
    c.element = s;
    document.body.appendChild(s)
    return s
}
