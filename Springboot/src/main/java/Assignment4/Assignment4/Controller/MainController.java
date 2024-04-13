package Assignment4.Assignment4.Controller;

import Assignment4.Assignment4.Model.Book;
import Assignment4.Assignment4.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {
    @Autowired
    BookService bookService;

    @GetMapping("/book")
    public String action1(Model model) {
        model.addAttribute("book", new Book());
        return "addBook";
    }

    @PostMapping("/saveBook")
    public String action2(Book book) {
        bookService.saveBook(book);
        return "redirect:/book";
    }
}
