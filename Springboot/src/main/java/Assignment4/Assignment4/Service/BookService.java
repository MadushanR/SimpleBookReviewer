package Assignment4.Assignment4.Service;

import Assignment4.Assignment4.Model.Book;
import Assignment4.Assignment4.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepo;

    public void saveBook(Book book) {
        bookRepo.save(book);
    }

    public List<Book> getBooks(){
        return bookRepo.findAll();
    }
}

