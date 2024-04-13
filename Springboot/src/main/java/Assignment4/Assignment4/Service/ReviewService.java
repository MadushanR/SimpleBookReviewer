package Assignment4.Assignment4.Service;

import Assignment4.Assignment4.Model.Review;
import Assignment4.Assignment4.Repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    ReviewRepository reviewRepo;

    public void saveReview(Review review) {
        reviewRepo.save(review);
    }

    public List<Review> getReviews(){
        return reviewRepo.findAll();
    }

    public List<Review> getReviewsByBookId(int bookId) {
        return reviewRepo.findByBookId(bookId);
    }
}
