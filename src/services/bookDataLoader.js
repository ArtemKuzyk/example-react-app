import axios from "axios";
import { LS_KEYS, LocalStorageService } from "./localStorage";

const DATA_URL = {PATH : "/data-base/book.JSON",
                  GIT_PATH: "https://artemkuzyk.github.io/data-base/book.JSON"};

class BookData{
    static async set(path){
        return await axios
        // return fetch(DATA_URL.GIT_PATH)
        .get(DATA_URL.GIT_PATH)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            return response.data
        })
        // .then((response) => response.json())
        .then((data) => Object.values(data))
        .then((bookObj) => Object.keys(bookObj[0]).map(el => bookObj[0][el]))
        .then((bookArray) => {LocalStorageService.set(LS_KEYS.BOOK_LIST, bookArray)})
        .catch(() => alert("Sorry, book-services dosn`t work"))
    }
}

export { BookData, DATA_URL }