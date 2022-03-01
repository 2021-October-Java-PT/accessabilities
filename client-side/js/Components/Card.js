export default function Card(card) {
  return `
        <div class="review-card">
          <div class="location-wrapper">
          <div class="business-box business-name">${card.name}</div>
          <div class="business-box business-location"> ${card.businessCity}, ${card.businessState}</div>
          <div class="business-box business-rating">
          <i class="rating__star far fa-star"></i>
          <i class="rating__star far fa-star"></i>
          <i class="rating__star far fa-star"></i>
          <i class="rating__star far fa-star"></i>
          <i class="rating__star far fa-star"></i>
        </div>
          <div class="business-box business-description">${card.businessDescription}</div>
          <div class="business-box business-reviews">
            <div class="comment-container">
              <div class="comment-row">
              <div class="col-6">
                <div class="comment-body"></div>
              </div>
            </div>
            <div class="comment-row">
              <div class="col-6">
                <textarea type="text" placeholder="Write a comment" class="input"></textarea>
                <button type="submit" class="primaryContained float-right">Add Comment</button>
              </div>
          </div>
          </div>
        </div>
    `;
}
