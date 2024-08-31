let myLibrary  = [
]

const bookContainer = document.querySelector('.booksContainer')
const addButton = document.querySelector('.addBook')
const form = document.querySelector('.formContainer')
const title = document.getElementById('title')
const readForm  = document.getElementById('read')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const formSubmitButton = document.querySelector('.submitBook')
const removeButton = document.querySelector('.removeBook')
const swtichButton = document.querySelector('.switchButton')

function Book(title,author,pages,read) {
    if (typeof title !== 'string') {
        throw new Error('Wrong format of title')
    }
    
    if (typeof author !== 'string') {
        throw new Error('Wrong format of author')
    }
    
    if (typeof pages !== 'number') {
        throw new Error('Wrong format of number')
    }
    
    if (typeof read !== 'boolean') {
        throw new Error('Wrong format of boolean')
    }
    

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}







function addBook(title,author,pages,read) {
   const newBook = new Book(title,author,pages,read)
   if (typeof newBook !== 'object') {
    throw new Error('wrong data')
   }

    myLibrary.push(newBook)
    displayLibrary()
}


function removeBook(title) {
   return myLibrary.filter(book => book.title !== title)
   
}

function displayLibrary() {
    bookContainer.textContent = ''
    myLibrary.forEach((book, index) => {
        const div = document.createElement('div')
        div.classList.add('singleBook')

        const remove = document.createElement('button')
        remove.dataset.index = index
        remove.textContent = 'remove'
        remove.classList.add('removeBook')

        const switchButton = document.createElement('button')
        switchButton.dataset.index = index
        switchButton.textContent = 'Change status'
        switchButton.classList.add('switchButton')


        const pBook = document.createElement('p')
        pBook.textContent = `author: ${book.author}, pages: ${book.pages}, read: ${book.read}`

        const h1Book = document.createElement('h1')
        h1Book.textContent = `${book.title}`

        
        div.appendChild(h1Book)
        div.appendChild(pBook)
        div.appendChild(remove)
        div.appendChild(switchButton)
        bookContainer.appendChild(div)

    })
}

addButton.addEventListener('click', () => {
    form.style.display = 'block';
})


formSubmitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const titleValue = title.value 
    const authorValue = author.value 
    const pagesValue = parseInt(pages.value)
    const readValue = readForm.checked

    addBook(titleValue,authorValue,pagesValue,readValue)
    title.value = ''
    author.value = ''
    pages.value =''
    readForm.checked =''
    form.style.display = 'none'
})

bookContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('removeBook')) {
        const index = e.target.dataset.index
        console.log(index)
        myLibrary.splice(index,1)
    }

    if (e.target.classList.contains('switchButton')) {
        const index = e.target.dataset.index
        let readValue = myLibrary[index].read 
        readValue = !readValue
        myLibrary[index].read = readValue
       console.log(readValue)
       
    }
    displayLibrary()
})

// addBook('Dummy Book 1', 'Author 1', 100, true)
// addBook('Dummy Book 2', 'Author 2', 200, false)
// addBook('Dummy Book 3', 'Author 3', 300, true)


// displayLibrary()