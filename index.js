fetch("https://trainingaa.herokuapp.com/data")
  .then((response) => response.json())
  .then((json) => {
    images = json[1];
    members = json[0];
    nn = document.getElementById("new");
    var orig = `<div>
    <div class="icon"><i class="bb"></i></div>
    <h4 class="title"><a href="">aaa</a></h4>
    <p class="description">ajaj</p>
  </div>`;

    for (let i = 0; i < members.length; i++) {
      var MyContent = document.createElement("div");
      cust = orig;
      cust = cust.replace("aaa", members[i].title);
      cust = cust.replace("ajaj", members[i].description);
      cust = cust.replace("bb", members[i].icon);
      MyContent.className = "col-lg-4 col-md-6 icon-box";
      MyContent.innerHTML = cust;
      nn.appendChild(MyContent);
    }

    var imgid = document.getElementById("forimgg");
    var OrigImg = `
          <div>
            <div>
              <img src="iimm" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"><a href="">desss</a></h5>
                <p class="card-text">deees</p>
                <a href="#" class="btn">Explore more</a>
              </div>
            </div>
         </div> `;

    for (let index = 0; index < images.length; index++) {
      var Content = document.createElement("div");
      cut = OrigImg;
      cut = cut.replace("iimm", images[index].img);
      cut = cut.replace("desss", images[index].hh);
      cut = cut.replace("deees", images[index].pp);
      Content.className =
        "col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0";

      Content.innerHTML = cut;
      imgid.appendChild(Content);
    }
  });
