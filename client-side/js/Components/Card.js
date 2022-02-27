export default function Card(card) {
  return `

        <div class="review-card">
          <div class="location-wrapper">
          <div class="location-box a">${card.name}</div>
          <div class="location-box b"> ${card.businessCity}, ${card.businessState}</div>
          <div class="location-box c">Rating: C<div class="rating">
          <i class="rating__star far fa-star"></i>
          <i class="rating__star far fa-star"></i>
          <i class="rating__star far fa-star"></i>
          <i class="rating__star far fa-star"></i>
          <i class="rating__star far fa-star"></i>
        </div></div>
          <div class="location-box d">${card.businessDescription}</div>
          <div class="location-box e">Reviews</div>
          </div>
        </div>
        
        

    `;
}