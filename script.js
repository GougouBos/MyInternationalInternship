// Manually list all image filenames in the images folder
const imageFilenames = [
  /*week 1*/
  'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'imageA.jpg',
  /*week 2*/
  'image10.jpg', 'image11.jpg', 'image12.jpg', 'imageA.jpg', 'image14.jpg', 'image15.jpg', 'image16.jpg',
  /*week 3*/
  'image18.jpg', 'image19.jpg', 'image20.jpg', 'image21.jpg', 'image22.jpg', 'imageA.jpg', 'image24.jpg',
  /*week 4*/
  'image26.jpg', 'image27.jpg', 'image28.jpg', 'image29.jpg', 'image30.jpg', 'image31.jpg', 'image32.jpg',
  /*week 5*/
  'image34.jpg', 'image35.jpg', 'image36.jpg', 'imageA.jpg', 'image38.jpg', 'image39.jpg', 'image40.jpg',
  /*week 6*/
  'image42.jpg', 'image43.jpg', 'image44.jpg', 'image45.jpg', 'imageA.jpg', 'image47.jpg', 'image48.jpg',
  /*week 7*/
  'image50.jpg', 'image51.jpg', 'imageA.jpg', 'image53.jpg', 'image54.jpg', 'image55.jpg', 'image56.jpg',
  /*week 8*/
  'image58.jpg', 'imageA.jpg', 'image60.jpg', 'image61.jpg', 'image62.jpg', 'image63.jpg', 'image64.jpg',
  /*week 9*/
  'image66.jpg', 'image67.jpg', 'image68.jpg', 'imageA.jpg', 'image70.jpg', 'image71.jpg', 'imageA.jpg',
  /*week 10*/
  'imageA.jpg', 'image75.jpg', 'image76.jpg', 'image77.jpg', 'image78.jpg', 'imageA.jpg', 'image80.jpg',
  /*week 11*/
  'image82.jpg', 'imageA.jpg', 'image84.jpg', 'image85.jpg', 'image86.jpg', 'image87.jpg', 'imageA.jpg',
];
// Array of bullet points for each image (same length as imageFilenames)
const bulletPoints = [
  ["Monday, 1 July 2024", " 9am to 5pm", "FIRST DAY!!!", "Meeting the team and getting a tour of the embassy", "I was given a badge to enter the building, a computer and an email-adres", "Premilary discussion of the possible tasks during my internship."],
  ["Tuesday, 2 July 2024", "9am to 4pm", "Started off at the office but quickly went to the residence of the ambassador", "I was introduced to the project manager and he gave me a grand tour of the residence discussing the work needed to be done", "Getting ready and helping to prepare for a reception that afternoon", "My task during event was welcoming and greeting the guests" ],
  ["Wednesday, 3 July 2024", "9am to 4pm", "With what had been discussed the previous day, I started my first real task.", "I had to contact several curtain companies requesting their quotes", "While awaiting their response, I also began analyzing the terrain of the residence where the potential new office building could be located."],
  ["Thursday, 4 July 2024", "DAY OFF", "All around Amerika, the Forth of July is being celabrated.", "My family and I were invited for a potluck brunch.", "In the evening, we watched the fireworks from the riverside."],
  ["Friday, 5 July 2024", "9am to 5pm", "Another day at the office.", "I continued my work on the quotes", "During lunch, went out in the neighborhood", "Fun fact, the office is only 2 blocks away from the White House!"],
  ["Saturday, 6 July 2024", "WEEKEND", "First week done, slowly getting rid of my jetlag", " the (very) warm weather didn't stop us to go on a roadtrip.", "Just outside of Washington DC, the BIG cork vineyard is a perfect place to relax and unwind."],
  ["Sunday, 7 July 2024", "WEEKEND", "First impression of Washington DC", "It is a whole different atmosphere than Belgium, so much bigger en more people", ""],
  ["Monday, 8 July 2024", "9am to 5pm", "I am still continuing getting quotes from the companies and comparing them", "A well deserved needed break and a new nickname!", "In the afternoon they gave me a smaller task: finding a solution for curved window curtains."],
  ["Tuesday, 9 July 2024", "9am to 5pm", "Having the privilege to get a ride to work every morning"],
  ["Wednesday, 10 July 2024", "9am to 5pm", "I am so mesmarized by the architecture in this city", "Encompassing government, monumental, commercial, and residential buildings all in one."],
  ["Thursday, 11 July 2024", "9am to 5pm", "Nothing special at the office", "The whole city was captivated by the NATO summit taking place that week."],
  ["Friday, 12 July 2024", "9am to 5pm", "After work, we strolled around the (empty) city.", "A heavy police presence to keep everything under control during the final day of the NATO summit. "],
  ["Saturday, 13 July 2024", "WEEKEND", "Giving back to the community, me and my sisters went to help a foodback distribute to the local community. "],
  ["Sunday, 14 July 2024", "WEEKEND", "The car is definitly a necessity, big shops are often more than an hour away", "The roads therefor are also adapted to that many vehicules", "But it doesn't hide away the abondance of nature all around."],
  ["Monday, 15 July 2024", "PERSONAL DAY", "I accompanied my parents to a memorial ceremony at the Arlington National Cemetery", "This historic cemetery, established during the Civil War, home to about 400 000 graveds. ","It honors military personnel and their families including those who have served in various conflicts throughout U.S. history. "],
  ["Tuesday, 16 July 2024", "9am to 4pm", "A day at the residence!", "Another task was updating the inventory of the residence.", "Always easier with some good company!"],
  ["Wednesday, 17 July 2024", "10pm to 4pm", "Continuing the inventory, writing down all the goods", "Everything that is inside of the residence, belongs to the Belgian State and some pieces are of high value"],
  ["Thursday, 18 July 2024", "9am to 4pm", "The residence itself is very impressive built in 1960 by the architect Paul Philippe Cret", "Located in the Foxhall Village neighborhood of Washington, D.C.", "Combines traditional and contemporary elements, reflecting Belgium's heritage.", "It was inspired by the Hôtel de Ville (Town Hall) in Brussels, Belgium."],
  ["Friday, 19 July 2024", "9am to 4pm", "Day at the office", "I had to enter the whole inventory in a particulary (not so easy) program, but I got the hang off it rather quickly", "After having been glued to the screen, the evening activities in my hometown are so enjoyable", "Good music, good food and good company!"],
  ["Saturday, 20 July 2024", "WEEKEND"],
  ["Sunday, 21 July 2024", "WEEKEND", "A public park / playground just a few feet away from my house, ","We pumped up our basketball and got to shoot some hoops", "It definitely brought back childhood memories!"],
  ["Monday, 22 July 2024", "9am to 4pm","Another start off the week, beginning with some rainy days","Even in the rain, the residence stands out!", "luckily we didn't have to work outside, still inside checking the inventory"],
  ["Tuesday, 23 July 2024","9am to 4pm", "Counting how many forks, knives, spoons, bowls, plates, ... the ambassador needs in his cupboard", "With a good teamwork, the time flew by and the job got done easily"],
  ["Wednesday, 24 July 2024","9am to 4pm", "Last day of inventorying, checking if nothing was missed", "In the evening, the ambassador himself organised a discussionboard with college students", "It was very interesting talking about the impact of Belgian on Politics, Economy, World Peace, ..."],
  ["Thursday, 25 July 2024", "9am to 5pm", "Back at the office", "Finalising inventory in the given program and also updating the plans of the residence"],
  ["Friday, 26 July 2024", "9am to 5pm", "Working on my architectural analysis of the residence","the possibilities are endless, but security, privacy are keyelements", "after work, I enjoyed a concert by the US Navy Band Country Current with not only good music but also sharing an important message" ],
  ["Saturday, 27 July 2024", "WEEKEND", "With the family went on a citytrip, visiting one of the many museums in Washington DC.", "U.S. Holocaust Memorial Museum sure leaves an impact on all, and its mission  'to confront hatred, prevent genocide, and promote human dignity.' speaks loudly "],
  ["Sunday, 28 July 2024", "WEEKEND", "My favourite museum so far : The John F. Kennedy Center for the Performing Arts", "the President John F. Kennedy, who was a strong advocate for the arts.", "Inside a wide range of performances, including ballet, opera, theater, and concerts are given.", "Outside on the rooftop offers stunning views of the Washington, D.C. skyline and the Potomac River."],
  ["Monday, 29 July 2024", "9am to 4pm", "At the residence, DIY project, making curtains for the curved windows", "Check of the list : American Dining Experience at the Silver Diner, just like in the old movies"],
  ["Tuesday, 30 July 2024", "9am to 4pm", "Getting hands on with the curtains, I bought all the materials needed"],
  ["Wednesday, 31 July 2024", "9am to 5pm", "Testing out my theory", "Because it is a curved window, a straight curtain wouldn't be estheticaly pleasing", "so with some pvc pipe, I could copy the curve of the window.", "this will also block more sunlight than a straight curtain rod"],
  ["Thursday, 1 August 2024", "9am to 4pm", "Completely focused on finishing the curtains"],
  ["Friday, 2 August 2024", "8am to 7pm", "As usual, it takes longer than you planned", "But the curtains are hanging!"],
  ["Saturday, 3 August 2024", "WEEKEND", "After a succesful finish of the curtains, a wel deserved weekend ahead.", "Strolling through Georgetown, a small historic neighborhood with shops, restaurant and beautifull architecture"],
  ["Sunday, 4 August 2024", "WEEKEND", "a quiet day at home", "discoverd the best burger place in town : World of Beer" ,"Although the French fries are better in Belgium"],
  ["Monday, 5 August 2024", "9am to 5pm", "Sketch of the day!", "There is still a lot to do before the new ambassador arrives", "setting up different appointments"],
  ["Tuesday, 6 August 2024", "9am to 4pm", "Several works are being done at the residence, and I had to keep an eye on things.", "But I don't mind my workplace"],
  ["Wednesday, 7 August 2024", "9am to 4pm", "After getting some samples from the different curtain companies I could compare them", "deciding which one fits best in the room"],
  ["Thursday, 8 August 2024", "9am to 5pm", "Rainy day"],
  ["Friday, 9 August 2024", "9am to 5pm", "The analysis of the terrein is done, now the designing part can start"],
  ["Saturday, 10 August 2024", "WEEKEND", "My concept for the new buidling", "FORM FOLLOW FUNCTION"],
  ["Sunday, 11 August 2024", "WEEKEND", "Finding a good balance between work and pleasure",""],
  ["Monday, 12 August 2024", "9am to 5pm", "Still amazed by the ride to work, from the suburbs to the big city"],
  ["Tuesday, 13 August 2024", "9am to 5pm", "After work","Enjoying some music at the Capitol with the sun going down behind the Washington Monument"],
  ["Wednesday, 14 August 2024"],
  ["Thursday, 15 August 2024", "9am to 4pm", "A day at the residence"],
  ["Friday, 16 August 2024", "9am tp 5pm", "Ending the busy week with some good food and weekly music "],
  ["Saturday, 17 August 2024", "WEEKEND", "Georgetown outing with family"],
  ["Sunday, 18 August 2024", "WEEKEND", "This game didn't last long, unfortunately.", " But it did clear up my mind"],
  ["Monday, 19 August 2024", "9am to 5pm", "City in the evening, after work"],
  ["Tuesday, 20 August 2024"],
  ["Wednesday, 21 August 2024", "9am to 5pm", "Evening activity : Strathmore Park"],
  ["Thursday, 22 August 2024", "9am to 5pm", "Morning walk before work"],
  ["Friday, 23 August 2024", "9am to 5pm"],
  ["Saturday, 24 August 2024", "WEEKEND", "Late night work"],
  ["Sunday, 25 August 2024", "WEEKEND", "Can't remember if it was sunrise of sunset"],
  ["Monday, 26 August 2024", "9am to 5pm","Good start of the week, with some coffee"],
  ["Tuesday, 27 August 2024", "9am to 5pm", "The metro again to work today, about 40 min", "first presentation of my project in front of my colleges", "they gave me some good feedback on which I can continue on working"],
  ["Wednesday, 28 August 2024", "9am to 4pm", "Another day at the residence, overlooking some works", "working on my own project on the side"],
  ["Thursday, 29 August 2024", "9am to 5pm" ],
  ["Friday, 30 August 2024", "9am to 5pm","Through the tunnel bridge, after the metroride home"],
  ["Saturday, 31 August 2024", "WEEKEND", "Calm day at home", "working on my project and some cardgames with sisters"],
  ["Sunday, 1 September 2024", "WEEKEND", "Time seems to fly by, already been here for about 2 months","But I also start to miss Belgium a bit"],
  ["Monday, 2 September 2024", "9am to 4pm", "The last week before the arrival of the ambassador, still have to do a lot", "from painting walls and polishing the floors to replacing furniture and cleaning carpets"],
  ["Tuesday, 3 September 2024", "9am to 4pm", "Day at the residence overlooking works", "I brought my laptop with me so I could continue working on my project", "In the evening, I went to retrieve my 3D-print, it turn out perfectly!"],
  ["Wednesday, 4 September 2024", "9am to 5pm", "Having a physical model helps to grasp the notion of space and scale better, and to have some fun experimenting"],
  ["Thursday, 5 September 2024", "9am to 4pm", "The last big tasks at the residence are wrapping up", "A new friend is waiting at our door for us to come home"],
  ["Friday, 6 September 2024", "9am to 5pm", "Started off at the office", "Another reception planned at the residence"],
  ["Saturday, 7 September 2024", "WEEKEND", "Last weekend here, gonna make the most of it!",],
  ["Sunday, 8 September 2024", "WEEKEND", "Still working on my presentation, "],
  ["Monday, 9 September 2024", "9am to 5pm", "Last week at the office started", "But I am still full in work modus to finish my presentation"],
  ["Tuesday, 10 September 2024", "9am to 5pm"],
  ["Wednesday, 11 September 2024", "9am to 5pm", "Presentation day", "I was very nervous but it went well, I got al lot of praise for my work","Also recived good feedback that I am definetly going to take with me in the futur"],
  ["Thursday, 12 September 2024", "LAST WORKDAY", "Didn't do much work", "All preparing for the farewell party"],
  ["Friday, 13 September 2024", "LAST DAY", "One last walk through this city", "Have to catch my flight back at 2pm"],
  ["Saterday, 14 September 2024", "BACK HOME", "The Belgian air filling my lungs and Belgian landscape blinding my eyes"],
  ["Sunday, 15 September 2024", "BACK HOME", "And just like that, I am back"],


];

// Base URL for images folder
const baseURL = './diary/';

// Generate grid items
const gridContainer = document.getElementById('grid');
imageFilenames.forEach((filename, index) => {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');

  const img = document.createElement('img');
  img.src = baseURL + filename;
  img.alt = `Image ${index + 1}`;
  img.addEventListener('click', () => openOverlay(index));

  gridItem.appendChild(img);
  gridContainer.appendChild(gridItem);
});
// Same functions for overlay, navigation, and close as previously provided
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const infoBox = document.getElementById('info-box');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
const closeBtn = document.getElementById('close-btn');

let currentIndex = null;

function openOverlay(index) {
  currentIndex = index;
  overlayImage.src = baseURL + imageFilenames[currentIndex];
  populateInfoBox(currentIndex);
  overlay.style.display = 'flex';
}

function populateInfoBox(index) {
  infoBox.innerHTML = '';
  const points = bulletPoints[index] || ["Default point 1", "Default point 2", "Default point 3"];
  points.forEach(point => {
    const li = document.createElement('li');
    li.textContent = point;
    infoBox.appendChild(li);
  });
}

function populateInfoBox(index) {
  infoBox.innerHTML = '';
  const points = bulletPoints[index] || ["Default point 1", "Default point 2", "Default point 3"];

  points.forEach((point, i) => {
      const li = document.createElement('li');

      if (i === 0) {
          li.classList.add('bold-centered');  // First item: Bold, centered, no bullet
      } 
      else if (i === 1) {
          li.classList.add('clock-icon');     // Second item: Italic, clock icon as bullet
      } 
      else {
          li.style.marginTop = '5px';         // Normal styling for remaining items
          li.style.marginLeft = '30px';
      }

      li.textContent = point;
      infoBox.appendChild(li);
  });
}

function prevImage() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : imageFilenames.length - 1;
  overlayImage.src = baseURL + imageFilenames[currentIndex];
  populateInfoBox(currentIndex);
}

function nextImage() {
  currentIndex = currentIndex < imageFilenames.length - 1 ? currentIndex + 1 : 0;
  overlayImage.src = baseURL + imageFilenames[currentIndex];
  populateInfoBox(currentIndex);
}

function closeOverlay() {
  overlay.style.display = 'none';
  currentIndex = null;
}

prevArrow.addEventListener('click', prevImage);
nextArrow.addEventListener('click', nextImage);
closeBtn.addEventListener('click', closeOverlay);

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("slideshow-modal");
  const closeButton = document.querySelector(".close-button");
  const slideshowImage = document.getElementById("slideshow-image");
  const slideshowDescription = document.getElementById("slideshow-description");
  const prevButton = document.getElementById("prev-slide");
  const nextButton = document.getElementById("next-slide");

  const projectSlides = {
      projectA: [
        { "src": "presentatie/Dia1.png", "desc": "Exterior view of the new office building." },
        { "src": "presentatie/Dia2.png", "desc": "Interior view of the lobby area." },
        { "src": "presentatie/Dia3.png", "desc": "Meeting room layout and design." },
        { "src": "presentatie/Dia4.png", "desc": "Close-up of the main reception desk." },
        { "src": "presentatie/Dia5.png", "desc": "View of the central courtyard from above." },
        { "src": "presentatie/Dia6.png", "desc": "Façade materials and finishes detail." },
        { "src": "presentatie/Dia7.png", "desc": "Landscape integration around the building." },
        { "src": "presentatie/Dia8.png", "desc": "Sketch of initial design concepts." },
        { "src": "presentatie/Dia9.png", "desc": "Open workspace layout with furniture." },
        { "src": "presentatie/Dia10.png", "desc": "Sustainability features in the building." },
        { "src": "presentatie/Dia11.png", "desc": "Lighting design in common areas." },
        { "src": "presentatie/Dia12.png", "desc": "Close-up of windows and shading devices." },
        { "src": "presentatie/Dia13.png", "desc": "Second-floor layout and design." },
        { "src": "presentatie/Dia14.png", "desc": "Interior view of cafeteria area." },
        { "src": "presentatie/Dia15.png", "desc": "View of the rooftop terrace." },
        { "src": "presentatie/Dia16.png", "desc": "Concept sketch for building entrance." },
        { "src": "presentatie/Dia17.png", "desc": "Acoustic solutions in office spaces." },
        { "src": "presentatie/Dia18.png", "desc": "3D model of the entire building." },
        { "src": "presentatie/Dia19.png", "desc": "Energy-efficient HVAC system layout." },
        { "src": "presentatie/Dia20.png", "desc": "Outdoor seating and green spaces." },
        { "src": "presentatie/Dia21.png", "desc": "Perspective view from the main road." },
        { "src": "presentatie/Dia22.png", "desc": "Details of materials used in flooring." },
        { "src": "presentatie/Dia23.png", "desc": "Views of pedestrian pathways." },
        { "src": "presentatie/Dia24.png", "desc": "Initial render of the lobby area." },
        { "src": "presentatie/Dia25.png", "desc": "Close-up of structural beams and supports." },
        { "src": "presentatie/Dia26.png", "desc": "View of office spaces with partitions." },
        { "src": "presentatie/Dia27.png", "desc": "Landscape design plan overview." },
        { "src": "presentatie/Dia28.png", "desc": "Cross-section of the building." },
        { "src": "presentatie/Dia29.png", "desc": "Elevation view of the building façade." },
        { "src": "presentatie/Dia30.png", "desc": "Corridor design and lighting solutions." },
        { "src": "presentatie/Dia31.png", "desc": "Design of private office spaces." },
        { "src": "presentatie/Dia32.png", "desc": "Integration of renewable energy sources." },
        { "src": "presentatie/Dia33.png", "desc": "Conference room and multimedia setup." },
        { "src": "presentatie/Dia34.png", "desc": "Fire safety and evacuation routes." },
        { "src": "presentatie/Dia35.png", "desc": "Atrium view from the ground floor." },
        { "src": "presentatie/Dia36.png", "desc": "Ventilation system layout overview." },
        { "src": "presentatie/Dia37.png", "desc": "Nighttime exterior lighting design." },
        { "src": "presentatie/Dia38.png", "desc": "Perspective view of the building at sunset." }
        
      ],
      projectB: [
          { src: "portfolio/residenceB_1.jpg", desc: "Residence exterior, prepared for the new ambassador." },
          { src: "portfolio/residenceB_2.jpg", desc: "Interior renovations completed." },
          { src: "portfolio/residenceB_3.jpg", desc: "Dining room set up." }
      ],
      projectC: [
          { src: "portfolio/sketchbookC_1.jpg"}
      ]
  };

  let currentProject = null;
  let currentIndex = 0;

  function openModal(projectId) {
      currentProject = projectSlides[projectId];
      currentIndex = 0;
      updateSlide();
      modal.style.display = "block";
  }

  function updateSlide() {
      if (currentProject && currentProject[currentIndex]) {
          slideshowImage.src = currentProject[currentIndex].src;
          slideshowDescription.textContent = currentProject[currentIndex].desc;
      }
  }

  document.querySelectorAll(".read-more").forEach(button => {
      button.addEventListener("click", function () {
          const projectId = this.getAttribute("data-project");
          openModal(projectId);
      });
  });

  closeButton.addEventListener("click", function () {
      modal.style.display = "none";
  });

  prevButton.addEventListener("click", function () {
      if (currentProject) {
          currentIndex = (currentIndex - 1 + currentProject.length) % currentProject.length;
          updateSlide();
      }
  });

  nextButton.addEventListener("click", function () {
      if (currentProject) {
          currentIndex = (currentIndex + 1) % currentProject.length;
          updateSlide();
      }
  });

  window.addEventListener("click", function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});