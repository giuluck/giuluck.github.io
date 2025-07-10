const age = new Date(Date.now() - new Date(1997, 8, 15).getTime()).getFullYear() - 1970

const info = {
    "IT": {gender: "Lui", age: age + " Anni", location: "Bologna (BO), 40129"},
    "EN": {gender: "He/Him", age: age + " Years Old", location: "Bologna, Italy (IT)"}
}