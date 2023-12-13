export function flexibleContent1(flexibleGroup) {
  return `
    <div class="flexible-1 box"> 
      <p>${flexibleGroup?.texto ? flexibleGroup?.texto : ""}</p>
      <img
      loading="lazy"
      style="max-width:100% ;height:auto"
      src="${flexibleGroup?.imagen?.sourceUrl}"
      srcset="${flexibleGroup?.imagen?.srcSet}"
      width=${flexibleGroup?.imagen?.mediaDetails?.width}
      height=${flexibleGroup?.imagen?.mediaDetails?.height}
      ></img>   
    </div>
  `;
}