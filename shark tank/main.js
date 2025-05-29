let mainSection = document.getElementById("data-list-wrapper");

// // pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// // Update pitch
// let updatePitchIdInput = document.getElementById("update-pitch-id");
// let updatePitchTitleInput = document.getElementById("update-pitch-title");
// let updatePitchImageInput = document.getElementById("update-pitch-image");
// let updatePitchfounderInput = document.getElementById("update-pitch-founder");
// let updatePitchCategoryInput = document.getElementById("update-pitch-category");
// let updatePitchPriceInput = document.getElementById("update-pitch-price");
// let updatePitchBtn = document.getElementById("update-pitch");

// //Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

// //sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

// //Search by title/founder

// let searchBySelect = document.getElementById("search-by-select");
// let searchByInput = document.getElementById("search-by-input");
// let searchByButton = document.getElementById("search-by-button");

// // Problem 1. List of pitches on page load [3}

// ++++++++++++++++++++++++++++++++Task 1 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function cardDataCall() {
  fetch("http://localhost:3000/pitches")
    .then((res) => res.json())
    .then((data) => {
      dataFilledInCard(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function dataFilledInCard(pitchesExctractedData) {
  let pitches = pitchesExctractedData.map((pitchesData, i) =>
    card(
      pitchesData.image,
      pitchesData.title,
      pitchesData.founder,
      pitchesData.price,
      pitchesData.id,
      pitchesData.category
    )
  );
  mainSection.innerHTML = pitches;

  sortAtoZBtn.addEventListener("click", () => {
    let sortArray = pitchesExctractedData.sort((a, b) => a.price - b.price);

    let lowToHighSorted = sortArray.map((lowToHigh, i) =>
      card(
        lowToHigh.image,
        lowToHigh.title,
        lowToHigh.founder,
        lowToHigh.price,
        lowToHigh.id,
        lowToHigh.category
      )
    );

    mainSection.innerHTML = lowToHighSorted;
    console.log(lowToHighSorted);
  });

  sortZtoABtn.addEventListener("click", () => {
    let sortArray = pitchesExctractedData.sort((a, b) => b.price - a.price);

    let highToLowSorted = sortArray.map((highToLow, i) =>
      card(
        highToLow.image,
        highToLow.title,
        highToLow.founder,
        highToLow.price,
        highToLow.id,
        highToLow.category
      )
    );

    mainSection.innerHTML = highToLowSorted;
    console.log(highToLowSorted);
  });

  filterFood.addEventListener("click", () => {
    let filterArr = pitchesExctractedData.filter((el) => el.category == "Food");

    let filteredFood = filterArr.map((foodCat, i) =>
      card(
        foodCat.image,
        foodCat.title,
        foodCat.founder,
        foodCat.price,
        foodCat.id,
        foodCat.category
      )
    );

    mainSection.innerHTML = filteredFood;
    console.log(filteredFood);


    sortZtoABtn.addEventListener("click", () => {
    let sortArrayInFood = filterArr.sort((a, b) => b.price - a.price);

    let highToLowSortedFoood = sortArrayInFood.map((highToLowFood, i) =>
      card(
        highToLowFood.image,
        highToLowFood.title,
        highToLowFood.founder,
        highToLowFood.price,
        highToLowFood.id,
        highToLowFood.category
      )
    );

    mainSection.innerHTML = highToLowSortedFoood;
    console.log(highToLowSortedFoood);
  });



  sortAtoZBtn.addEventListener("click", () => {
    let sortArrayInFoodAsc = filterArr.sort((a, b) => a.price - b.price);

    let lowToHighSortedFood = sortArrayInFoodAsc.map((lowToHighInFood, i) =>
      card(
        lowToHighInFood.image,
        lowToHighInFood.title,
        lowToHighInFood.founder,
        lowToHighInFood.price,
        lowToHighInFood.id,
        lowToHighInFood.category
      )
    );

    mainSection.innerHTML = lowToHighSortedFood;
    console.log(lowToHighSortedFood);
  });




  });


 filterElectronics.addEventListener("click", () => {
    let electronicsArr = pitchesExctractedData.filter((el) => el.category == "Electronics");

    let filteredElectronics = electronicsArr.map((ele, i) =>
      card(
        ele.image,
        ele.title,
        ele.founder,
        ele.price,
        ele.id,
        ele.category
      )
    );

    mainSection.innerHTML = filteredElectronics;
    console.log(filteredElectronics);


sortZtoABtn.addEventListener("click", () => {
    let sortArrayInEle = electronicsArr.sort((a, b) => b.price - a.price);

    let highToLowSortedEle = sortArrayInEle.map((highToLowEle, i) =>
      card(
        highToLowEle.image,
        highToLowEle.title,
        highToLowEle.founder,
        highToLowEle.price,
        highToLowEle.id,
        highToLowEle.category
      )
    );

    mainSection.innerHTML = highToLowSortedEle;
    console.log(highToLowSortedEle);
  });



  sortAtoZBtn.addEventListener("click", () => {
    let sortArrayInEleAsc = electronicsArr.sort((a, b) => a.price - b.price);

    let lowToHighSortedEle = sortArrayInEleAsc.map((lowToHighInEle, i) =>
      card(
        lowToHighInEle.image,
        lowToHighInEle.title,
        lowToHighInEle.founder,
        lowToHighInEle.price,
        lowToHighInEle.id,
        lowToHighInEle.category
      )
    );

    mainSection.innerHTML = lowToHighSortedEle;
    console.log(lowToHighSortedEle);
  });





  });



 filterPersonalCare.addEventListener("click", () => {
    let pcArry = pitchesExctractedData.filter((el) => el.category == "Personal Care");

    let filteredPc = pcArry.map((pc, i) =>
      card(
        pc.image,
        pc.title,
        pc.founder,
        pc.price,
        pc.id,
        pc.category
      )
    );

    mainSection.innerHTML = filteredPc;
    console.log(filteredPc);



    sortZtoABtn.addEventListener("click", () => {
    let sortArrayInPc = pcArry.sort((a, b) => b.price - a.price);

    let highToLowSortedPc = sortArrayInPc.map((highToLowPc, i) =>
      card(
        highToLowPc.image,
        highToLowPc.title,
        highToLowPc.founder,
        highToLowPc.price,
        highToLowPc.id,
        highToLowPc.category
      )
    );

    mainSection.innerHTML = highToLowSortedPc;
    console.log(highToLowSortedPc);
  });



  sortAtoZBtn.addEventListener("click", () => {
    let sortArrayInPcAsc = pcArry.sort((a, b) => a.price - b.price);

    let lowToHighSortedPc = sortArrayInPcAsc.map((lowToHighInPc, i) =>
      card(
        lowToHighInPc.image,
        lowToHighInPc.title,
        lowToHighInPc.founder,
        lowToHighInPc.price,
        lowToHighInPc.id,
        lowToHighInPc.category
      )
    );

    mainSection.innerHTML = lowToHighSortedPc;
    console.log(lowToHighSortedPc);
  });





  });

}




function card(image, title, founder, price, id, category) {
  let cardDiv = `<div class="card">
                  <div class="card-image">
                    <img src=${image} alt="" class="card-img">
                  </div>
                  <div class="card-body">
                  <p class="card-id">Id: ${id}</p>
                    <h3 class="card-title">${title}</h3>
                    <p class="card-founder">Founder :${founder}</p>
                    <p class="card-category">${category}</p>
                    <p class="card-price">$${price}</p>
                    <a href="" class="card-link">Edit</a>
                    <button class="card-button">Delete</button>
                  </div>
                
                </div>`;

  return cardDiv;
}

cardDataCall();

// +++++++++++++++++++++++++++Task 2++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

pitchCreateBtn.addEventListener("click", () => {
  let newPitchesObj = {
    title: pitchTitleInput.value,
    image: pitchImageInput.value,
    category: pitchCategoryInput.value,
    founder: pitchfounderInput.value,
    price: pitchPriceInput.value,
  };
  console.log(newPitchesObj);

  fetch("http://localhost:3000/pitches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPitchesObj),
  });
});

// +++++++++++++++++++++++++++Task 3 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

updatePricePitchPriceButton.addEventListener("click", () => {
  let id = updatePricePitchId.value;
  let updatedPitchesPrice = {
    price: updatePricePitchPrice.value,
  };
  fetch(`http://localhost:3000/pitches/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPitchesPrice),
  });
});
