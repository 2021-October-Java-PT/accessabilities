export default function Card(card) {
  return `
        <div class="review-card">
          <div class="location-wrapper">
          
          <div class="business-box business-name">${card.name}</div>
          <div class="business-box business-location"> ${card.businessCity}, ${card.businessState}</div>
          <div class="business-box business-rating">
          <p>Leave a rating:</p>
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
            <div class="comment-row-2"> 
              <div class="col-6"> 
                <input type="text" id="review-title" placeholder="Name"> <br></br>
                <textarea type="text" placeholder="Write a comment" class="input" style="width: 600px; height: 140px;"></textarea>
                <button type="submit" class="primaryContained float-right">Add Comment</button>
              </div>
          </div>
          </div>
        </div>
        <div class="business-box comments-box">
          <p class="try" ></p>
        </div>

        <input type="hidden" id="businessId">
    `;
}
