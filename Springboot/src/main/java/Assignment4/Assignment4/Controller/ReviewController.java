package Assignment4.Assignment4.Controller;

import Assignment4.Assignment4.Model.Book;
import Assignment4.Assignment4.Model.Review;
import Assignment4.Assignment4.Repository.ReviewRepository;
import Assignment4.Assignment4.Service.BookService;
import Assignment4.Assignment4.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ReviewController {

    @Autowired
    private BookService bookService;
    @Autowired
    private ReviewService reviewService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/books")
    public List<Book> showBooks(){
        return bookService.getBooks();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/books/{id}/reviews")
    public List<Review> showReviewsByBookId(@PathVariable int id) {
        return reviewService.getReviewsByBookId(id);
    }

    @PostMapping("/api/add-review")
    @CrossOrigin("http://localhost:4200")
    public void addReview( @RequestBody Review review) {
        reviewService.saveReview(review);
    }
}

