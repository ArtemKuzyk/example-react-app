import axios from "axios";
import { LS_KEYS, LocalStorageService } from "./localStorage";

const DATA_URL = {PATH : "./book.JSON",
                  GIT_PATH: "https://artemkuzyk.github.io/book.JSON"};

class BookData{
    static async set(path){
        // return await axios
        console.log(DATA_URL.PATH)
        return fetch(DATA_URL.PATH)
        // .get(DATA_URL.GIT_PATH)
        // .then((response) => response.data)
        .then((response) => {
            console.log(response);
            return response.json()}
            )
        .then((data) => Object.values(data))
        .then((bookObj) => Object.keys(bookObj[0]).map(el => bookObj[0][el]))
        .then((bookArray) => {LocalStorageService.set(LS_KEYS.BOOK_LIST, bookArray)})
        .catch(() => alert("Sorry, book-services dosn`t work"))
    }
}

export { BookData, DATA_URL }