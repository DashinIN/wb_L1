//9.	Реализовать функцию конвертации JSON в строку


const convertToJsonString = (obj) => {
    //Проверяем тип передданого параметра и в зависимости от типа выполняем соответствующую обработку. 
    if (typeof obj === "undefined") {
       return "undefined";
    } else if (obj === null) {
       return "null";
       //Если переданый параметр является примитивом, он конвертируется в строку
    } else if (typeof obj === "number" || typeof obj === "boolean") {
       return obj.toString();
       //Если переданый параметр является строкой, он заключается в кавычки
    } else if (typeof obj === "string") {
       return '"' + obj + '"';
       //Если переданый параметр является массивом, каждый элемент массива рекурсивно 
       //преобразуется в строку и затем добавляется в общую для массива строку
    } else if (Array.isArray(obj)) {
       let arr = [];
       obj.forEach(item => arr.push(convertToJsonString(item)));
       return "[" + arr.join(",") + "]";
    } else {
        //Если переданый параметр является объектом, каждое свойство объекта рекурсивно преобразуется 
        //в строку и сохраняется в массиве props.
       let props = [];
       for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                props.push('"' + prop + '":' + convertToJsonString(obj[prop]));
            }
        }
        return "{" + props.join(",") + "}";
    }
}

//Данные для проверки
 const stringFromJson = convertToJsonString({ "prop1": "value1", "prop2": 2, "prop3": [true, false] })
 const stringFromJson2 = convertToJsonString({
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
});

 //Убеждаемся что пеобразование верное
 console.log(stringFromJson)
 console.log(stringFromJson2)