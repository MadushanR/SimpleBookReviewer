package Assignment4.Assignment4.Repository;

import Assignment4.Assignment4.Model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review,Integer> {
    List<Review> findByBookId(int bookId);
}
