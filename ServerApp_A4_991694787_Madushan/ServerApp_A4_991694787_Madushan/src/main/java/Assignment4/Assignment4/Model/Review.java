package Assignment4.Assignment4.Model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="reviews_table")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "book_id")
    private int bookId;
    private String reviewerName;
    private int rating;
    private String comment;
    @ManyToOne

    @JoinColumn(name = "book_id", referencedColumnName = "id", insertable = false, updatable = false)

    private Book book;

    public Review() {
    }

    public Review(int id, int bookId, String reviewerName, int rating, String comment) {
        this.id = id;
        this.bookId = bookId;
        this.reviewerName = reviewerName;
        this.rating = rating;
        this.comment = comment;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getReviewerName() {
        return reviewerName;
    }

    public void setReviewerName(String reviewerName) {
        this.reviewerName = reviewerName;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
