window.onload = () => {
    getNewsData();
}
let json = `{
    "status": "OK",
    "copyright": "Copyright (c) 2020 The New York Times Company. All Rights Reserved.",
    "section": "Politics",
    "last_updated": "2020-11-01T10:28:26-05:00",
    "num_results": 29,
    "results": [
      {
        "section": "us",
        "subsection": "politics",
        "title": "Election at Hand, Biden Leads Trump in Four Key States, Poll Shows",
        "abstract": "Joseph R. Biden Jr. leads President Trump in Pennsylvania, Florida, Arizona and, by a wide margin, in Wisconsin, according to a Times/Siena College poll.",
        "url": "https://www.nytimes.com/2020/11/01/us/politics/biden-trump-poll-florida-pennsylvania-wisconsin.html",
        "uri": "nyt://article/6dde3182-4544-51a0-ba43-57b32206576c",
        "byline": "By Alexander Burns and Jonathan Martin",
        "item_type": "Article",
        "updated_date": "2020-11-01T13:01:10-05:00",
        "created_date": "2020-11-01T05:00:22-05:00",
        "published_date": "2020-11-01T05:00:22-05:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2016",
          "Presidential Election of 2020",
          "Polls and Public Opinion",
          "United States Politics and Government"
        ],
        "org_facet": [],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Clinton, Hillary Rodham",
          "Trump, Donald J"
        ],
        "geo_facet": [
          "Arizona",
          "Florida",
          "Pennsylvania",
          "Wisconsin"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/-promo-1604183914590/-promo-1604183914590-superJumbo.png",
            "format": "superJumbo",
            "height": 1331,
            "width": 2000,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": ""
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/-promo-1604183914590/-promo-1604183914590-thumbStandard-v2.png",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": ""
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/-promo-1604183914590/-promo-1604183914590-thumbLarge-v2.png",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": ""
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/-promo-1604183914590/-promo-1604183914590-mediumThreeByTwo210.png",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": ""
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/-promo-1604183914590/-promo-1604183914590-articleInline.png",
            "format": "Normal",
            "height": 126,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": ""
          }
        ],
        "short_url": "https://nyti.ms/2HWkHNp"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "The Battlegrounds Within Battlegrounds",
        "abstract": "Here are 20 counties in battleground states that are crucial for a White House victory.",
        "url": "https://www.nytimes.com/interactive/2020/us/politics/battleground-states-trump-biden.html",
        "uri": "nyt://interactive/2b97db37-f72f-5bf5-8995-d171bc910e4e",
        "byline": "By Keith Collins, Trip Gabriel and Stephanie Saul",
        "item_type": "Interactive",
        "updated_date": "2020-11-01T13:01:07-05:00",
        "created_date": "2020-10-31T20:39:52-04:00",
        "published_date": "2020-10-31T20:39:52-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020"
        ],
        "org_facet": [],
        "per_facet": [
          "Trump, Donald J",
          "Biden, Joseph R Jr"
        ],
        "geo_facet": [
          "Wisconsin",
          "Pennsylvania",
          "North Carolina",
          "Florida",
          "Arizona",
          "Michigan"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/battleground-states-trump-biden-promo-1604182710610/battleground-states-trump-biden-promo-1604182710610-superJumbo.png",
            "format": "superJumbo",
            "height": 1331,
            "width": 2000,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": ""
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/battleground-states-trump-biden-promo-1604182710610/battleground-states-trump-biden-promo-1604182710610-thumbStandard.png",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": ""
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/battleground-states-trump-biden-promo-1604182710610/battleground-states-trump-biden-promo-1604182710610-thumbLarge.png",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": ""
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/battleground-states-trump-biden-promo-1604182710610/battleground-states-trump-biden-promo-1604182710610-mediumThreeByTwo210.png",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": ""
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/battleground-states-trump-biden-promo-1604182710610/battleground-states-trump-biden-promo-1604182710610-articleInline.png",
            "format": "Normal",
            "height": 126,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": ""
          }
        ],
        "short_url": "https://nyti.ms/2TE9VNY"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Dishonesty Has Defined the Trump Presidency. The Consequences Could Be Lasting.",
        "abstract": "Whether President Trump wins or loses on Nov. 3, the very concept of public trust in an established set of facts necessary for the operation of a democratic society has been eroded.",
        "url": "https://www.nytimes.com/2020/11/01/us/politics/trump-presidency-dishonesty.html",
        "uri": "nyt://article/1af04622-8420-5c7c-859c-ddf21d0ffcc6",
        "byline": "By Peter Baker",
        "item_type": "Article",
        "updated_date": "2020-11-01T13:01:11-05:00",
        "created_date": "2020-11-01T05:00:28-05:00",
        "published_date": "2020-11-01T05:00:28-05:00",
        "material_type_facet": "",
        "kicker": "news Analysis",
        "des_facet": [
          "United States Politics and Government",
          "Presidents and Presidency (US)",
          "Presidential Election of 2020",
          "Rumors and Misinformation",
          "Lying"
        ],
        "org_facet": [],
        "per_facet": [
          "Trump, Donald J"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/28/us/politics/01dc-trump-dishonesty-sub/merlin_179123178_1d399e9d-a92f-4e0f-bcd3-1b5d19011f80-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "The sheer volume of President Trump’s untruths, both petty and profound, has been cataloged and quantified time and again.",
            "copyright": "Al Drago for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/28/us/politics/01dc-trump-dishonesty-sub/28dc-trump-dishonesty-sub-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "The sheer volume of President Trump’s untruths, both petty and profound, has been cataloged and quantified time and again.",
            "copyright": "Al Drago for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/28/us/politics/01dc-trump-dishonesty-sub/28dc-trump-dishonesty-sub-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "The sheer volume of President Trump’s untruths, both petty and profound, has been cataloged and quantified time and again.",
            "copyright": "Al Drago for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/28/us/politics/01dc-trump-dishonesty-sub/merlin_179123178_1d399e9d-a92f-4e0f-bcd3-1b5d19011f80-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "The sheer volume of President Trump’s untruths, both petty and profound, has been cataloged and quantified time and again.",
            "copyright": "Al Drago for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/28/us/politics/01dc-trump-dishonesty-sub/merlin_179123178_1d399e9d-a92f-4e0f-bcd3-1b5d19011f80-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "The sheer volume of President Trump’s untruths, both petty and profound, has been cataloged and quantified time and again.",
            "copyright": "Al Drago for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/324RxCG"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Their First Try Backfired, but Giuliani and Allies Keep Aiming at Biden",
        "abstract": "The former New York mayor’s dirt-digging effort on Hunter Biden in 2019 ended with President Trump’s impeachment. Now he is back with new associates. So far it is not going exactly as planned.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/rudy-giuliani-biden.html",
        "uri": "nyt://article/3fed62c7-bcf8-5ccc-916e-5e44c0f6ae83",
        "byline": "By Kenneth P. Vogel, Jim Rutenberg and Maggie Haberman",
        "item_type": "Article",
        "updated_date": "2020-11-01T11:23:26-05:00",
        "created_date": "2020-10-31T14:39:19-04:00",
        "published_date": "2020-10-31T14:39:19-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "Presidential Election of 2016",
          "Trump-Ukraine Whistle-Blower Complaint and Impeachment Inquiry",
          "United States Politics and Government",
          "Corruption (Institutional)",
          "Rumors and Misinformation"
        ],
        "org_facet": [
          "New York Post"
        ],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Biden, Hunter",
          "Giuliani, Rudolph W",
          "Bannon, Stephen K",
          "Guo Wengui",
          "Trump, Donald J",
          "Bobulinski, Tony",
          "Schweizer, Peter"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-biden-rudy-1/merlin_177705276_2c22a818-fba0-4766-9e4c-d86a91b5a46c-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump’s effort to strong-arm Ukraine into announcing an investigation of the Bidens led to his impeachment, but his personal lawyer Rudolph W. Giuliani is trying again to promote anti-Biden material.",
            "copyright": "Al Drago for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-biden-rudy-1/merlin_177705276_2c22a818-fba0-4766-9e4c-d86a91b5a46c-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump’s effort to strong-arm Ukraine into announcing an investigation of the Bidens led to his impeachment, but his personal lawyer Rudolph W. Giuliani is trying again to promote anti-Biden material.",
            "copyright": "Al Drago for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-biden-rudy-1/merlin_177705276_2c22a818-fba0-4766-9e4c-d86a91b5a46c-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump’s effort to strong-arm Ukraine into announcing an investigation of the Bidens led to his impeachment, but his personal lawyer Rudolph W. Giuliani is trying again to promote anti-Biden material.",
            "copyright": "Al Drago for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-biden-rudy-1/merlin_177705276_2c22a818-fba0-4766-9e4c-d86a91b5a46c-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump’s effort to strong-arm Ukraine into announcing an investigation of the Bidens led to his impeachment, but his personal lawyer Rudolph W. Giuliani is trying again to promote anti-Biden material.",
            "copyright": "Al Drago for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-biden-rudy-1/merlin_177705276_2c22a818-fba0-4766-9e4c-d86a91b5a46c-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump’s effort to strong-arm Ukraine into announcing an investigation of the Bidens led to his impeachment, but his personal lawyer Rudolph W. Giuliani is trying again to promote anti-Biden material.",
            "copyright": "Al Drago for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3kMbTb7"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "To Trump, ‘the Polls That Matter’ Point to Victory. The Rest Are ‘Fake.’",
        "abstract": "President Trump’s blinkered view of 2020 polling has created something of an alternate universe, even as his campaign struggles to find the voters he needs in the data it has.",
        "url": "https://www.nytimes.com/2020/11/01/us/politics/trump-polls.html",
        "uri": "nyt://article/867d4e60-9a57-5154-9e6c-b5aceaae24d8",
        "byline": "By Maggie Haberman",
        "item_type": "Article",
        "updated_date": "2020-11-01T11:06:44-05:00",
        "created_date": "2020-11-01T11:06:44-05:00",
        "published_date": "2020-11-01T11:06:44-05:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "Polls and Public Opinion",
          "United States Politics and Government",
          "Voting and Voters",
          "Data-Mining and Database Marketing"
        ],
        "org_facet": [
          "Republican National Committee"
        ],
        "per_facet": [
          "Trump, Donald J",
          "Kushner, Jared"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01trump-polling-1/merlin_179376870_18f5b85d-d11e-4085-ada5-7a124b6b3424-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1366,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump at a rally in Montoursville, Pa., on Saturday.",
            "copyright": "Anna Moneymaker for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01trump-polling-1/merlin_179376870_18f5b85d-d11e-4085-ada5-7a124b6b3424-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump at a rally in Montoursville, Pa., on Saturday.",
            "copyright": "Anna Moneymaker for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01trump-polling-1/merlin_179376870_18f5b85d-d11e-4085-ada5-7a124b6b3424-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump at a rally in Montoursville, Pa., on Saturday.",
            "copyright": "Anna Moneymaker for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01trump-polling-1/merlin_179376870_18f5b85d-d11e-4085-ada5-7a124b6b3424-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump at a rally in Montoursville, Pa., on Saturday.",
            "copyright": "Anna Moneymaker for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01trump-polling-1/merlin_179376870_18f5b85d-d11e-4085-ada5-7a124b6b3424-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump at a rally in Montoursville, Pa., on Saturday.",
            "copyright": "Anna Moneymaker for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/2JnGduJ"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "We Have Never Had Final Results on Election Day",
        "abstract": "President Trump has been trying to pre-emptively delegitimize ballots counted after Nov. 3. But states have always counted past election night.",
        "url": "https://www.nytimes.com/2020/11/01/us/politics/trump-ballot-counting-election.html",
        "uri": "nyt://article/c45d88e5-2604-5355-bace-ef47806535d9",
        "byline": "By Maggie Astor",
        "item_type": "Article",
        "updated_date": "2020-11-01T11:01:03-05:00",
        "created_date": "2020-11-01T08:00:09-05:00",
        "published_date": "2020-11-01T08:00:09-05:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "Voting and Voters"
        ],
        "org_facet": [],
        "per_facet": [
          "Trump, Donald J"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01election-delays-1/merlin_179351658_3220e977-6519-43c5-84a9-7e8ba82d6583-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Jasper County elections officials sorted ballots in Newton, Iowa, on Saturday. In many states, it could take days of counting votes to get an accurate picture of the results.",
            "copyright": "Kathryn Gamble for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01election-delays-1/merlin_179351658_3220e977-6519-43c5-84a9-7e8ba82d6583-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Jasper County elections officials sorted ballots in Newton, Iowa, on Saturday. In many states, it could take days of counting votes to get an accurate picture of the results.",
            "copyright": "Kathryn Gamble for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01election-delays-1/merlin_179351658_3220e977-6519-43c5-84a9-7e8ba82d6583-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Jasper County elections officials sorted ballots in Newton, Iowa, on Saturday. In many states, it could take days of counting votes to get an accurate picture of the results.",
            "copyright": "Kathryn Gamble for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01election-delays-1/merlin_179351658_3220e977-6519-43c5-84a9-7e8ba82d6583-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Jasper County elections officials sorted ballots in Newton, Iowa, on Saturday. In many states, it could take days of counting votes to get an accurate picture of the results.",
            "copyright": "Kathryn Gamble for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01election-delays-1/merlin_179351658_3220e977-6519-43c5-84a9-7e8ba82d6583-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Jasper County elections officials sorted ballots in Newton, Iowa, on Saturday. In many states, it could take days of counting votes to get an accurate picture of the results.",
            "copyright": "Kathryn Gamble for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/31ZxsO8"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "He Already Saw the Election as Good vs. Evil. Then His Tractor Burned.",
        "abstract": "In Nebraska, President Trump’s supporters hope he wins a second term, and that they get four more years of feeling like the country’s leader understands and defends them.",
        "url": "https://www.nytimes.com/2020/11/01/us/politics/trump-tractor-fire-nebraska.html",
        "uri": "nyt://article/4418cacb-134c-5821-b2c8-a9f3c147837d",
        "byline": "By Dionne Searcey",
        "item_type": "Article",
        "updated_date": "2020-11-01T11:06:20-05:00",
        "created_date": "2020-11-01T05:00:33-05:00",
        "published_date": "2020-11-01T05:00:33-05:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "United States Politics and Government",
          "Rural Areas",
          "Agriculture and Farming"
        ],
        "org_facet": [],
        "per_facet": [
          "Trump, Donald J",
          "Ricketts, John Peter",
          "Sasse, Benjamin E"
        ],
        "geo_facet": [
          "Nebraska"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/politics/00forgotten-voters1/merlin_179086221_4900fd55-bb2f-4342-b2ef-fa0ed0d5ac6a-superJumbo.jpg",
            "format": "superJumbo",
            "height": 2048,
            "width": 1639,
            "type": "image",
            "subtype": "photo",
            "caption": "Jonathan Rempel enjoys the lonely feeling of being on the farm, where he can zone out in the cab of his combine or behind the wheel of his pickup, rumbling down gravel roads.",
            "copyright": "Walker Pickering for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/politics/00forgotten-voters1/00forgotten-voters1-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Jonathan Rempel enjoys the lonely feeling of being on the farm, where he can zone out in the cab of his combine or behind the wheel of his pickup, rumbling down gravel roads.",
            "copyright": "Walker Pickering for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/politics/00forgotten-voters1/00forgotten-voters1-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Jonathan Rempel enjoys the lonely feeling of being on the farm, where he can zone out in the cab of his combine or behind the wheel of his pickup, rumbling down gravel roads.",
            "copyright": "Walker Pickering for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/politics/00forgotten-voters1/00forgotten-voters1-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Jonathan Rempel enjoys the lonely feeling of being on the farm, where he can zone out in the cab of his combine or behind the wheel of his pickup, rumbling down gravel roads.",
            "copyright": "Walker Pickering for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/politics/00forgotten-voters1/merlin_179086221_4900fd55-bb2f-4342-b2ef-fa0ed0d5ac6a-articleInline.jpg",
            "format": "Normal",
            "height": 238,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Jonathan Rempel enjoys the lonely feeling of being on the farm, where he can zone out in the cab of his combine or behind the wheel of his pickup, rumbling down gravel roads.",
            "copyright": "Walker Pickering for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3817OfG"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Can Raphael Warnock Go From the Pulpit to the Senate?",
        "abstract": "The pastor at the Ebenezer Baptist Church in Atlanta, where Martin Luther King Jr. once preached, is betting that Georgia is ready to send a religious progressive to Washington.",
        "url": "https://www.nytimes.com/2020/11/01/us/politics/raphael-warnock-ga.html",
        "uri": "nyt://article/0e60cb40-f584-5398-a745-58bdbbf8a098",
        "byline": "By Richard Fausset",
        "item_type": "Article",
        "updated_date": "2020-11-01T13:01:13-05:00",
        "created_date": "2020-11-01T05:00:18-05:00",
        "published_date": "2020-11-01T05:00:18-05:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Elections, Senate"
        ],
        "org_facet": [
          "Ebenezer Baptist Church (Atlanta, Ga)"
        ],
        "per_facet": [
          "Warnock, Raphael G"
        ],
        "geo_facet": [
          "Georgia"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01Warnock-00/merlin_179175750_00c3f1c3-4652-4b5e-9a86-89f869800c48-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "The Rev. Dr. Raphael Warnock is running at the front of the pack for a U.S. Senate seat in Georgia.",
            "copyright": "Lynsey Weatherspoon for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01Warnock-00/01Warnock-00-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "The Rev. Dr. Raphael Warnock is running at the front of the pack for a U.S. Senate seat in Georgia.",
            "copyright": "Lynsey Weatherspoon for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01Warnock-00/01Warnock-00-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "The Rev. Dr. Raphael Warnock is running at the front of the pack for a U.S. Senate seat in Georgia.",
            "copyright": "Lynsey Weatherspoon for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01Warnock-00/merlin_179175750_00c3f1c3-4652-4b5e-9a86-89f869800c48-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "The Rev. Dr. Raphael Warnock is running at the front of the pack for a U.S. Senate seat in Georgia.",
            "copyright": "Lynsey Weatherspoon for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01Warnock-00/merlin_179175750_00c3f1c3-4652-4b5e-9a86-89f869800c48-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "The Rev. Dr. Raphael Warnock is running at the front of the pack for a U.S. Senate seat in Georgia.",
            "copyright": "Lynsey Weatherspoon for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3mFqaqp"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Pastors at the Polls? Meet Ohio’s Election Protection Squad",
        "abstract": "After the most tense election season in generations, clergy members are being trained and deployed to defuse potentially violent encounters on Election Day.",
        "url": "https://www.nytimes.com/2020/11/01/us/politics/election-day-violence.html",
        "uri": "nyt://article/045e2ca5-5821-536a-9b31-7be3849c6ef8",
        "byline": "By Nicholas Casey",
        "item_type": "Article",
        "updated_date": "2020-11-01T13:01:16-05:00",
        "created_date": "2020-11-01T05:00:13-05:00",
        "published_date": "2020-11-01T05:00:13-05:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Elections",
          "Clergy",
          "United States Politics and Government",
          "Presidential Election of 2020"
        ],
        "org_facet": [
          "Poor People's Campaign (Coalition)",
          "Proud Boys"
        ],
        "per_facet": [],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/11/02/us/politics/02clergy-polls-1sub/merlin_179367564_c168c3ad-c188-4bc5-b691-c9e4658d7c64-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Christine Jones-Leavy, a clergy member of the Unitarian Universalist Church, outside the Franklin County Board of Elections in Columbus, Ohio, on Saturday. Ohio’s clergy are at the forefront of an unusual effort to ensure an orderly election.",
            "copyright": "Maddie McGarvey for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/02/us/politics/02clergy-polls-1sub/merlin_179367564_c168c3ad-c188-4bc5-b691-c9e4658d7c64-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Christine Jones-Leavy, a clergy member of the Unitarian Universalist Church, outside the Franklin County Board of Elections in Columbus, Ohio, on Saturday. Ohio’s clergy are at the forefront of an unusual effort to ensure an orderly election.",
            "copyright": "Maddie McGarvey for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/02/us/politics/02clergy-polls-1sub/merlin_179367564_c168c3ad-c188-4bc5-b691-c9e4658d7c64-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Christine Jones-Leavy, a clergy member of the Unitarian Universalist Church, outside the Franklin County Board of Elections in Columbus, Ohio, on Saturday. Ohio’s clergy are at the forefront of an unusual effort to ensure an orderly election.",
            "copyright": "Maddie McGarvey for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/02/us/politics/02clergy-polls-1sub/merlin_179367564_c168c3ad-c188-4bc5-b691-c9e4658d7c64-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Christine Jones-Leavy, a clergy member of the Unitarian Universalist Church, outside the Franklin County Board of Elections in Columbus, Ohio, on Saturday. Ohio’s clergy are at the forefront of an unusual effort to ensure an orderly election.",
            "copyright": "Maddie McGarvey for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/02/us/politics/02clergy-polls-1sub/merlin_179367564_c168c3ad-c188-4bc5-b691-c9e4658d7c64-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Christine Jones-Leavy, a clergy member of the Unitarian Universalist Church, outside the Franklin County Board of Elections in Columbus, Ohio, on Saturday. Ohio’s clergy are at the forefront of an unusual effort to ensure an orderly election.",
            "copyright": "Maddie McGarvey for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3oPa5AG"
      },
      {
        "section": "upshot",
        "subsection": "",
        "title": "Americans Are Afraid. Not for Themselves, but for the Country.",
        "abstract": "A feeling of alarm and fear about the future of democracy, from voters across the political spectrum.",
        "url": "https://www.nytimes.com/2020/11/01/upshot/election-democracy-fear-americans.html",
        "uri": "nyt://article/0a16ed39-7be4-502b-9d24-6511740a4225",
        "byline": "By Emily Badger",
        "item_type": "Article",
        "updated_date": "2020-11-01T10:24:58-05:00",
        "created_date": "2020-11-01T05:00:11-05:00",
        "published_date": "2020-11-01T05:00:11-05:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "United States Politics and Government",
          "Democracy (Theory and Philosophy)",
          "Voting and Voters"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/11/01/upshot/1up-fear-sub/merlin_179362053_6b868f2d-edd6-44d9-9613-5d5a39b3b0ec-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "The line at an early-voting site in Palm Harbor, Fla. on Saturday.",
            "copyright": "Eve Edelheit for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/upshot/1up-fear-sub/1up-fear-sub-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "The line at an early-voting site in Palm Harbor, Fla. on Saturday.",
            "copyright": "Eve Edelheit for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/upshot/1up-fear-sub/1up-fear-sub-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "The line at an early-voting site in Palm Harbor, Fla. on Saturday.",
            "copyright": "Eve Edelheit for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/upshot/1up-fear-sub/merlin_179362053_6b868f2d-edd6-44d9-9613-5d5a39b3b0ec-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "The line at an early-voting site in Palm Harbor, Fla. on Saturday.",
            "copyright": "Eve Edelheit for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/upshot/1up-fear-sub/merlin_179362053_6b868f2d-edd6-44d9-9613-5d5a39b3b0ec-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "The line at an early-voting site in Palm Harbor, Fla. on Saturday.",
            "copyright": "Eve Edelheit for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3oNVmG7"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "U.S. Diplomat Coughs Online, and European Allies Wonder if They Were Exposed",
        "abstract": "A senior State Department official who tested positive for the coronavirus after a trip to Europe has angered other diplomats and irritated foreign officials whom he could have infected.",
        "url": "https://www.nytimes.com/2020/11/01/us/politics/coronavirus-state-department-diplomats.html",
        "uri": "nyt://article/d7f29769-0f95-5e34-9ac7-d3a584309a8c",
        "byline": "By Lara Jakes",
        "item_type": "Article",
        "updated_date": "2020-11-01T13:01:10-05:00",
        "created_date": "2020-11-01T05:00:09-05:00",
        "published_date": "2020-11-01T05:00:09-05:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "United States International Relations",
          "Diplomatic Service, Embassies and Consulates",
          "Coronavirus (2019-nCoV)"
        ],
        "org_facet": [
          "Chatham House (The Royal Institute of International Affairs)",
          "North Atlantic Treaty Organization",
          "State Department"
        ],
        "per_facet": [
          "Biegun, Stephen E",
          "Hutchison, Kay Bailey",
          "Kerry, John",
          "Pompeo, Mike",
          "Trump, Donald J"
        ],
        "geo_facet": [
          "Brussels (Belgium)",
          "Budapest (Hungary)",
          "London (England)",
          "Paris (France)"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/00dc-diplo-virus/merlin_171756519_d26603b4-8b66-4907-8cbd-9005ab3ed09c-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1536,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "The State Department in Washington. A senior department official’s positive diagnosis after meeting allies abroad has raised questions about the limits of in-person diplomacy during a pandemic.",
            "copyright": "Daniel Slim/Agence France-Presse — Getty Images"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/00dc-diplo-virus/00dc-diplo-virus-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "The State Department in Washington. A senior department official’s positive diagnosis after meeting allies abroad has raised questions about the limits of in-person diplomacy during a pandemic.",
            "copyright": "Daniel Slim/Agence France-Presse — Getty Images"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/00dc-diplo-virus/00dc-diplo-virus-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "The State Department in Washington. A senior department official’s positive diagnosis after meeting allies abroad has raised questions about the limits of in-person diplomacy during a pandemic.",
            "copyright": "Daniel Slim/Agence France-Presse — Getty Images"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/00dc-diplo-virus/merlin_171756519_d26603b4-8b66-4907-8cbd-9005ab3ed09c-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "The State Department in Washington. A senior department official’s positive diagnosis after meeting allies abroad has raised questions about the limits of in-person diplomacy during a pandemic.",
            "copyright": "Daniel Slim/Agence France-Presse — Getty Images"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/00dc-diplo-virus/merlin_171756519_d26603b4-8b66-4907-8cbd-9005ab3ed09c-articleInline.jpg",
            "format": "Normal",
            "height": 143,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "The State Department in Washington. A senior department official’s positive diagnosis after meeting allies abroad has raised questions about the limits of in-person diplomacy during a pandemic.",
            "copyright": "Daniel Slim/Agence France-Presse — Getty Images"
          }
        ],
        "short_url": "https://nyti.ms/320G1bn"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Stanford Study Seeks to Quantify Infections Stemming From Trump Rallies",
        "abstract": "The researchers used a statistical model to extrapolate infections tied to 18 rallies, and the study’s figures were not based on individual cases traced directly to particular campaign events.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/stanford-study-infections-trump-rallies.html",
        "uri": "nyt://article/fbc74012-90f0-57c1-aa2c-f556df0dc3c7",
        "byline": "By Sheryl Gay Stolberg",
        "item_type": "Article",
        "updated_date": "2020-11-01T13:01:10-05:00",
        "created_date": "2020-10-31T19:52:55-04:00",
        "published_date": "2020-10-31T19:52:55-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Contact Tracing (Public Health)",
          "Presidential Election of 2020"
        ],
        "org_facet": [
          "Stanford University"
        ],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Trump, Donald J",
          "Cain, Herman"
        ],
        "geo_facet": [
          "Tulsa (Okla)",
          "Duluth (Minn)",
          "Phoenix (Ariz)"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-virus-rallies-1/merlin_173855022_25e9472e-7d73-44bb-9d48-6ae8c9124e15-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "A rally for President Trump in Phoenix in June. Public health officials in states and counties where such rallies have been held said in interviews that it was impossible to tie particular infections to the gatherings.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-virus-rallies-1/merlin_173855022_25e9472e-7d73-44bb-9d48-6ae8c9124e15-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "A rally for President Trump in Phoenix in June. Public health officials in states and counties where such rallies have been held said in interviews that it was impossible to tie particular infections to the gatherings.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-virus-rallies-1/merlin_173855022_25e9472e-7d73-44bb-9d48-6ae8c9124e15-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "A rally for President Trump in Phoenix in June. Public health officials in states and counties where such rallies have been held said in interviews that it was impossible to tie particular infections to the gatherings.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-virus-rallies-1/merlin_173855022_25e9472e-7d73-44bb-9d48-6ae8c9124e15-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "A rally for President Trump in Phoenix in June. Public health officials in states and counties where such rallies have been held said in interviews that it was impossible to tie particular infections to the gatherings.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-virus-rallies-1/merlin_173855022_25e9472e-7d73-44bb-9d48-6ae8c9124e15-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "A rally for President Trump in Phoenix in June. Public health officials in states and counties where such rallies have been held said in interviews that it was impossible to tie particular infections to the gatherings.",
            "copyright": "Doug Mills/The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/34Isxmo"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "George Shultz Speaks Out for Renewing U.S. Leadership Overseas",
        "abstract": "At a moment when the United States has pulled back from its allies, the former secretary of state lamented the Trump administration’s allergy to international accords.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/george-schultz-trump-biden-election.html",
        "uri": "nyt://article/602dd1f0-840c-59a7-9874-2a82574a2f34",
        "byline": "By Peter Baker",
        "item_type": "Article",
        "updated_date": "2020-10-31T19:05:56-04:00",
        "created_date": "2020-10-31T19:05:56-04:00",
        "published_date": "2020-10-31T19:05:56-04:00",
        "material_type_facet": "",
        "kicker": "Washington Memo",
        "des_facet": [
          "United States International Relations",
          "Arms Control and Limitation and Disarmament",
          "Treaties"
        ],
        "org_facet": [],
        "per_facet": [
          "Shultz, George P",
          "Reagan, Ronald Wilson",
          "Trump, Donald J"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-shultz/31dc-shultz-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1432,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Former Secretary of State George P. Shultz, center, in 2018. He served as secretary of labor and secretary of the Treasury under President Richard M. Nixon and was President Ronald Reagan’s secretary of state.",
            "copyright": "Mark Wilson/Getty Images"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-shultz/31dc-shultz-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Former Secretary of State George P. Shultz, center, in 2018. He served as secretary of labor and secretary of the Treasury under President Richard M. Nixon and was President Ronald Reagan’s secretary of state.",
            "copyright": "Mark Wilson/Getty Images"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-shultz/31dc-shultz-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Former Secretary of State George P. Shultz, center, in 2018. He served as secretary of labor and secretary of the Treasury under President Richard M. Nixon and was President Ronald Reagan’s secretary of state.",
            "copyright": "Mark Wilson/Getty Images"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-shultz/31dc-shultz-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Former Secretary of State George P. Shultz, center, in 2018. He served as secretary of labor and secretary of the Treasury under President Richard M. Nixon and was President Ronald Reagan’s secretary of state.",
            "copyright": "Mark Wilson/Getty Images"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-shultz/31dc-shultz-articleInline.jpg",
            "format": "Normal",
            "height": 133,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Former Secretary of State George P. Shultz, center, in 2018. He served as secretary of labor and secretary of the Treasury under President Richard M. Nixon and was President Ronald Reagan’s secretary of state.",
            "copyright": "Mark Wilson/Getty Images"
          }
        ],
        "short_url": "https://nyti.ms/2TDROI0"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Trump Camp Uses Online Gimmick to Fuel Donations Into December",
        "abstract": "The Trump campaign is now automatically checking a box to create recurring weekly donations from supporters until mid-December.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/trump-fundraising-donations.html",
        "uri": "nyt://article/aeddb83b-6d50-5929-aad1-835736b7369b",
        "byline": "By Shane Goldmacher",
        "item_type": "Article",
        "updated_date": "2020-10-31T23:40:39-04:00",
        "created_date": "2020-10-31T18:42:46-04:00",
        "published_date": "2020-10-31T18:42:46-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "Campaign Finance",
          "Political Advertising"
        ],
        "org_facet": [
          "ActBlue",
          "Republican National Committee",
          "WinRed"
        ],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Trump, Donald J"
        ],
        "geo_facet": [
          "Pennsylvania"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/multimedia/31trump-findraiser-image1/merlin_179317356_e79a4e5d-a6ab-4daa-977f-bacaa1904dbb-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1344,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump arriving at a campaign rally in Green Bay, Wis., on Friday.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/multimedia/31trump-findraiser-image1/merlin_179317356_e79a4e5d-a6ab-4daa-977f-bacaa1904dbb-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump arriving at a campaign rally in Green Bay, Wis., on Friday.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/multimedia/31trump-findraiser-image1/merlin_179317356_e79a4e5d-a6ab-4daa-977f-bacaa1904dbb-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump arriving at a campaign rally in Green Bay, Wis., on Friday.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/multimedia/31trump-findraiser-image1/merlin_179317356_e79a4e5d-a6ab-4daa-977f-bacaa1904dbb-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump arriving at a campaign rally in Green Bay, Wis., on Friday.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/multimedia/31trump-findraiser-image1/merlin_179317356_e79a4e5d-a6ab-4daa-977f-bacaa1904dbb-articleInline.jpg",
            "format": "Normal",
            "height": 125,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump arriving at a campaign rally in Green Bay, Wis., on Friday.",
            "copyright": "Doug Mills/The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3kMp6AG"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Final Weekend Campaigning Reflects Both Traditional Barnstorming and 2020 Chaos",
        "abstract": "The candidates visited two of the key “Blue Wall” states Mr. Trump won in 2016.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/trump-biden-election-campaign.html",
        "uri": "nyt://article/140e9351-5a9a-5c27-af80-4fdce5486d7d",
        "byline": "By Maggie Haberman, Thomas Kaplan and Michael D. Shear",
        "item_type": "Article",
        "updated_date": "2020-11-01T03:12:30-05:00",
        "created_date": "2020-10-31T15:50:58-04:00",
        "published_date": "2020-10-31T15:50:58-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020"
        ],
        "org_facet": [
          "Senate"
        ],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Clinton, Hillary Rodham",
          "James, John (1981- )",
          "Obama, Barack",
          "Omar, Ilhan",
          "Trump, Donald J"
        ],
        "geo_facet": [
          "Pennsylvania",
          "Michigan"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31CAMPAIGN-sub2/merlin_179355921_f27a718b-5647-4d5b-b41e-9a1804b91df4-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Former President Barack Obama with former Vice President Joseph R. Biden Jr. on Saturday in Flint, Mich.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31CAMPAIGN-sub2/merlin_179355921_f27a718b-5647-4d5b-b41e-9a1804b91df4-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Former President Barack Obama with former Vice President Joseph R. Biden Jr. on Saturday in Flint, Mich.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31CAMPAIGN-sub2/merlin_179355921_f27a718b-5647-4d5b-b41e-9a1804b91df4-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Former President Barack Obama with former Vice President Joseph R. Biden Jr. on Saturday in Flint, Mich.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31CAMPAIGN-sub2/merlin_179355921_f27a718b-5647-4d5b-b41e-9a1804b91df4-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Former President Barack Obama with former Vice President Joseph R. Biden Jr. on Saturday in Flint, Mich.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31CAMPAIGN-sub2/merlin_179355921_f27a718b-5647-4d5b-b41e-9a1804b91df4-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Former President Barack Obama with former Vice President Joseph R. Biden Jr. on Saturday in Flint, Mich.",
            "copyright": "Erin Schaff/The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/35PsNPP"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Biden and Surrogates Hit Trump on Taxes in Closing Argument",
        "abstract": "“Why should you pay more taxes than Donald Trump?” Joseph R. Biden Jr. asked as he took aim at the president’s taxes and tax policy.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/biden-trump-taxes.html",
        "uri": "nyt://article/d3eaeec5-da37-5ff7-b2e8-b46061a5ec44",
        "byline": "By Danny Hakim and Susanne Craig",
        "item_type": "Article",
        "updated_date": "2020-10-31T23:54:46-04:00",
        "created_date": "2020-10-31T15:03:21-04:00",
        "published_date": "2020-10-31T15:03:21-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "Trump Tax Returns",
          "Federal Taxes (US)",
          "Federal Budget (US)",
          "National Debt (US)",
          "Income Tax",
          "Corporate Taxes"
        ],
        "org_facet": [
          "Internal Revenue Service",
          "House of Representatives",
          "Senate"
        ],
        "per_facet": [
          "Trump, Donald J",
          "Biden, Joseph R Jr",
          "Harris, Kamala D",
          "Obama, Barack",
          "McConnell, Mitch",
          "Sanders, Bernard"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/31Trump-Tax-image/merlin_179306976_4b85c34e-6642-48e8-aa93-2c619a92affe-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Biden supporters at a rally in Des Moines, Iowa, on Friday.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/31Trump-Tax-image/merlin_179306976_4b85c34e-6642-48e8-aa93-2c619a92affe-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Biden supporters at a rally in Des Moines, Iowa, on Friday.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/31Trump-Tax-image/merlin_179306976_4b85c34e-6642-48e8-aa93-2c619a92affe-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Biden supporters at a rally in Des Moines, Iowa, on Friday.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/31Trump-Tax-image/merlin_179306976_4b85c34e-6642-48e8-aa93-2c619a92affe-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Biden supporters at a rally in Des Moines, Iowa, on Friday.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/31Trump-Tax-image/merlin_179306976_4b85c34e-6642-48e8-aa93-2c619a92affe-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Biden supporters at a rally in Des Moines, Iowa, on Friday.",
            "copyright": "Erin Schaff/The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/2TDbGeq"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "The ‘Wall’ Is Still Motivating Voters. But This Time Is It Against Trump?",
        "abstract": "Immigration was a defining issue for President Trump in 2016. It’s less dominant in 2020, and it is motivating his critics as well as his supporters.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/trump-immigration-.html",
        "uri": "nyt://article/b3e6cddd-9dd4-586a-b892-8512eee97aa9",
        "byline": "By Jennifer Medina",
        "item_type": "Article",
        "updated_date": "2020-10-31T23:39:32-04:00",
        "created_date": "2020-10-31T13:27:32-04:00",
        "published_date": "2020-10-31T13:27:32-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "Immigration and Emigration",
          "Illegal Immigration",
          "Family Separation Policy (US Immigration)",
          "Border Barriers"
        ],
        "org_facet": [
          "Customs and Border Protection (US)",
          "Immigration and Customs Enforcement (US)"
        ],
        "per_facet": [
          "Arpaio, Joseph M"
        ],
        "geo_facet": [
          "Arizona"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01immigration-arizona1-print/merlin_179235102_5435a342-4ec8-43d6-a936-1f220f4497a3-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Border Patrol Agents, from left: Ben Taylor, Vinny Dulesky and Sergio Molina near the United States-Arizona border on Monday, Oct. 26, 2020.",
            "copyright": "Gabriella Angotti-Jones for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01immigration-arizona1-print/01immigration-arizona1-print-thumbStandard-v2.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Border Patrol Agents, from left: Ben Taylor, Vinny Dulesky and Sergio Molina near the United States-Arizona border on Monday, Oct. 26, 2020.",
            "copyright": "Gabriella Angotti-Jones for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01immigration-arizona1-print/01immigration-arizona1-print-thumbLarge-v2.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Border Patrol Agents, from left: Ben Taylor, Vinny Dulesky and Sergio Molina near the United States-Arizona border on Monday, Oct. 26, 2020.",
            "copyright": "Gabriella Angotti-Jones for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01immigration-arizona1-print/merlin_179235102_5435a342-4ec8-43d6-a936-1f220f4497a3-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Border Patrol Agents, from left: Ben Taylor, Vinny Dulesky and Sergio Molina near the United States-Arizona border on Monday, Oct. 26, 2020.",
            "copyright": "Gabriella Angotti-Jones for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01immigration-arizona1-print/merlin_179235102_5435a342-4ec8-43d6-a936-1f220f4497a3-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Border Patrol Agents, from left: Ben Taylor, Vinny Dulesky and Sergio Molina near the United States-Arizona border on Monday, Oct. 26, 2020.",
            "copyright": "Gabriella Angotti-Jones for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/31Zczm5"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Can Trump Woo Enough Black Men to Hurt Biden in Battleground States?",
        "abstract": "On the ground and in TV ads, the candidates are in an intense and surprising battle for Black male voters, who are crucial for Democrats trying to win back Michigan, Pennsylvania and Wisconsin.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/black-voters-trump-biden.html",
        "uri": "nyt://article/96457bdf-4f50-5a72-8c3c-841cb3244127",
        "byline": "By Astead W. Herndon, Nick Corasaniti and Kathleen Gray",
        "item_type": "Article",
        "updated_date": "2020-11-01T10:44:07-05:00",
        "created_date": "2020-10-31T13:12:08-04:00",
        "published_date": "2020-10-31T13:12:08-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "Black People",
          "Men and Boys",
          "Voting and Voters",
          "Presidential Election of 2016",
          "United States Politics and Government"
        ],
        "org_facet": [],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Trump, Donald J"
        ],
        "geo_facet": [
          "Pennsylvania",
          "Wisconsin",
          "Michigan"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01blackvoters-print1/merlin_176457717_6e98f4a0-3824-47f1-b328-ade9de38501a-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1366,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "City officials and attendees gathered in Philadelphia for National Poll Worker Recruitment Day.",
            "copyright": "Mark Makela for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01blackvoters-print1/00blackvoters1-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "City officials and attendees gathered in Philadelphia for National Poll Worker Recruitment Day.",
            "copyright": "Mark Makela for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01blackvoters-print1/00blackvoters1-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "City officials and attendees gathered in Philadelphia for National Poll Worker Recruitment Day.",
            "copyright": "Mark Makela for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01blackvoters-print1/merlin_176457717_6e98f4a0-3824-47f1-b328-ade9de38501a-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "City officials and attendees gathered in Philadelphia for National Poll Worker Recruitment Day.",
            "copyright": "Mark Makela for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01blackvoters-print1/merlin_176457717_6e98f4a0-3824-47f1-b328-ade9de38501a-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "City officials and attendees gathered in Philadelphia for National Poll Worker Recruitment Day.",
            "copyright": "Mark Makela for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3eckgtU"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Did President Trump Keep His First-Term Promises? Let’s Look at 5 of Them",
        "abstract": "Mr. Trump won the presidency in 2016 after making more than 100 promises. Here’s where some stand four years later and what some of his supporters think of them.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/trump-first-term-promises.html",
        "uri": "nyt://article/63560571-4669-51b1-8d74-e25df9e30e81",
        "byline": "By Linda Qiu and Annie Karni",
        "item_type": "Article",
        "updated_date": "2020-10-31T23:46:39-04:00",
        "created_date": "2020-10-31T13:12:04-04:00",
        "published_date": "2020-10-31T13:12:04-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2016",
          "Appointments and Executive Changes",
          "Tax Cuts and Jobs Act (2017)",
          "United States Politics and Government",
          "Courts and the Judiciary",
          "Federal Courts (US)",
          "Illegal Immigration",
          "North American Free Trade Agreement",
          "Presidential Election of 2020",
          "International Trade and World Market",
          "Patient Protection and Affordable Care Act (2010)"
        ],
        "org_facet": [
          "Republican Party"
        ],
        "per_facet": [
          "Trump, Donald J"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/politics/30trump-promises-1/merlin_179267826_bc985be8-2c75-45fb-9bd9-714bd78d7955-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1312,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump arriving at Pope Field in North Carolina on Thursday.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/politics/30trump-promises-1/merlin_179267826_bc985be8-2c75-45fb-9bd9-714bd78d7955-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump arriving at Pope Field in North Carolina on Thursday.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/politics/30trump-promises-1/merlin_179267826_bc985be8-2c75-45fb-9bd9-714bd78d7955-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump arriving at Pope Field in North Carolina on Thursday.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/politics/30trump-promises-1/30trump-promises-1-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump arriving at Pope Field in North Carolina on Thursday.",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/us/politics/30trump-promises-1/merlin_179267826_bc985be8-2c75-45fb-9bd9-714bd78d7955-articleInline.jpg",
            "format": "Normal",
            "height": 122,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "President Trump arriving at Pope Field in North Carolina on Thursday.",
            "copyright": "Doug Mills/The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3edFKGK"
      },
      {
        "section": "us",
        "subsection": "",
        "title": "The President’s Taxes: A Reader’s Guide",
        "abstract": "Over the past four years, The New York Times has independently obtained and published information on several decades of Donald J. Trump’s taxes.",
        "url": "https://www.nytimes.com/2020/10/31/us/donald-trump-taxes-guide.html",
        "uri": "nyt://article/22fb2414-10bd-5c5e-9377-dd7217af9989",
        "byline": "By The New York Times",
        "item_type": "Article",
        "updated_date": "2020-10-31T18:43:31-04:00",
        "created_date": "2020-10-31T11:33:11-04:00",
        "published_date": "2020-10-31T11:33:11-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Trump Tax Returns",
          "Federal Taxes (US)",
          "Presidential Election of 2020"
        ],
        "org_facet": [],
        "per_facet": [
          "Trump, Donald J"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/30/multimedia/30TrumpTaxes-Top/merlin_132070320_063ea2ee-0283-45c5-8d49-846d34b18b39-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1812,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/multimedia/30TrumpTaxes-Top/merlin_132070320_063ea2ee-0283-45c5-8d49-846d34b18b39-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/multimedia/30TrumpTaxes-Top/merlin_132070320_063ea2ee-0283-45c5-8d49-846d34b18b39-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/multimedia/30TrumpTaxes-Top/merlin_132070320_063ea2ee-0283-45c5-8d49-846d34b18b39-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Doug Mills/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/30/multimedia/30TrumpTaxes-Top/merlin_132070320_063ea2ee-0283-45c5-8d49-846d34b18b39-articleInline.jpg",
            "format": "Normal",
            "height": 168,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Doug Mills/The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/2JpZ74f"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Navy Commandos Rescue American Kidnapped in Niger",
        "abstract": "U.S. Special Operations forces conducted a predawn raid in neighboring Nigeria to free the American before he could be sold to terrorists.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/navy-commandos-philip-walton-hostage-niger.html",
        "uri": "nyt://article/dd337c7f-6028-5bf1-af78-0f31c2ac3052",
        "byline": "By Eric Schmitt",
        "item_type": "Article",
        "updated_date": "2020-11-01T01:40:32-05:00",
        "created_date": "2020-10-31T10:38:32-04:00",
        "published_date": "2020-10-31T10:38:32-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "United States Defense and Military Forces",
          "Kidnapping and Hostages",
          "Terrorism"
        ],
        "org_facet": [
          "Defense Department",
          "United States Special Operations Command"
        ],
        "per_facet": [],
        "geo_facet": [
          "Niger",
          "Nigeria",
          "Sahel (Africa)"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-commando-1/merlin_163590168_42165ebd-e222-4ae1-a23f-0ae308776f78-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Jonathan Hoffman, left, the chief Pentagon spokesman, said in a statement on Saturday that the American “is safe and is now in the care of the U.S. Department of State.”",
            "copyright": "Andrew Harnik/Associated Press"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-commando-1/merlin_163590168_42165ebd-e222-4ae1-a23f-0ae308776f78-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Jonathan Hoffman, left, the chief Pentagon spokesman, said in a statement on Saturday that the American “is safe and is now in the care of the U.S. Department of State.”",
            "copyright": "Andrew Harnik/Associated Press"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-commando-1/merlin_163590168_42165ebd-e222-4ae1-a23f-0ae308776f78-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Jonathan Hoffman, left, the chief Pentagon spokesman, said in a statement on Saturday that the American “is safe and is now in the care of the U.S. Department of State.”",
            "copyright": "Andrew Harnik/Associated Press"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-commando-1/merlin_163590168_42165ebd-e222-4ae1-a23f-0ae308776f78-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Jonathan Hoffman, left, the chief Pentagon spokesman, said in a statement on Saturday that the American “is safe and is now in the care of the U.S. Department of State.”",
            "copyright": "Andrew Harnik/Associated Press"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31dc-commando-1/merlin_163590168_42165ebd-e222-4ae1-a23f-0ae308776f78-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Jonathan Hoffman, left, the chief Pentagon spokesman, said in a statement on Saturday that the American “is safe and is now in the care of the U.S. Department of State.”",
            "copyright": "Andrew Harnik/Associated Press"
          }
        ],
        "short_url": "https://nyti.ms/3kMJRvV"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "When Parents Lose Their Jobs, Their Children Also Suffer. But Sometimes There’s a Consolation.",
        "abstract": "The sudden increase of time with their children has reminded some low-income parents of what they have been missing. “It’s an odd silver lining, but it’s there,” says Jane Waldfogel, a professor at the Columbia School of Social Work.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/unemployment-parents-children-coronavirus.html",
        "uri": "nyt://article/bb704c99-152b-5a37-861d-2fd38666c28a",
        "byline": "By Jason DeParle",
        "item_type": "Article",
        "updated_date": "2020-10-31T23:23:19-04:00",
        "created_date": "2020-10-31T10:17:13-04:00",
        "published_date": "2020-10-31T10:17:13-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Unemployment",
          "Children and Childhood",
          "Families and Family Life",
          "Parenting",
          "Work-Life Balance",
          "Coronavirus (2019-nCoV)"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [
          "Las Vegas (Nev)"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/28/us/politics/31dc-parents1/merlin_178151040_f4dfb424-8df7-4a6a-9595-034387388b67-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Gregory Pike helping his daughter, Makayla, with schoolwork at their home in Las Vegas. Mr. Pike said the coronavirus pandemic has brought him closer to his daughter.",
            "copyright": "Bridget Bennett for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/28/us/politics/31dc-parents1/00dc-parents1-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Gregory Pike helping his daughter, Makayla, with schoolwork at their home in Las Vegas. Mr. Pike said the coronavirus pandemic has brought him closer to his daughter.",
            "copyright": "Bridget Bennett for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/28/us/politics/31dc-parents1/00dc-parents1-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Gregory Pike helping his daughter, Makayla, with schoolwork at their home in Las Vegas. Mr. Pike said the coronavirus pandemic has brought him closer to his daughter.",
            "copyright": "Bridget Bennett for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/28/us/politics/31dc-parents1/merlin_178151040_f4dfb424-8df7-4a6a-9595-034387388b67-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Gregory Pike helping his daughter, Makayla, with schoolwork at their home in Las Vegas. Mr. Pike said the coronavirus pandemic has brought him closer to his daughter.",
            "copyright": "Bridget Bennett for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/28/us/politics/31dc-parents1/merlin_178151040_f4dfb424-8df7-4a6a-9595-034387388b67-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Gregory Pike helping his daughter, Makayla, with schoolwork at their home in Las Vegas. Mr. Pike said the coronavirus pandemic has brought him closer to his daughter.",
            "copyright": "Bridget Bennett for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/2HNFEd4"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Campaign 2020: Let’s Never Do This Again",
        "abstract": "It’s not hope or change. It’s not making anything great. It’s just about making it through.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/2020-campaign.html",
        "uri": "nyt://article/67bc2a31-f812-5503-92ca-497f2379bffb",
        "byline": "By Matt Flegenheimer and Todd Heisler",
        "item_type": "Article",
        "updated_date": "2020-10-31T23:45:52-04:00",
        "created_date": "2020-10-31T05:03:41-04:00",
        "published_date": "2020-10-31T05:03:41-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "United States Politics and Government"
        ],
        "org_facet": [],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Trump, Donald J"
        ],
        "geo_facet": [
          "Hialeah (Fla)",
          "Atlanta (Ga)",
          "Marietta (Ga)",
          "Philadelphia (Pa)",
          "Saginaw (Mich)"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31campaign-country-mi-eagle/merlin_179291904_5dcdb71a-84ac-40a6-88da-6e8086cca122-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Todd Heisler/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31campaign-country-mi-eagle/merlin_179291904_5dcdb71a-84ac-40a6-88da-6e8086cca122-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Todd Heisler/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31campaign-country-mi-eagle/merlin_179291904_5dcdb71a-84ac-40a6-88da-6e8086cca122-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Todd Heisler/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31campaign-country-mi-eagle/merlin_179291904_5dcdb71a-84ac-40a6-88da-6e8086cca122-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Todd Heisler/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31campaign-country-mi-eagle/merlin_179291904_5dcdb71a-84ac-40a6-88da-6e8086cca122-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Todd Heisler/The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/2JgqgGE"
      },
      {
        "section": "world",
        "subsection": "middleeast",
        "title": "A Frazzled World Holds Its Breath While the U.S. Chooses Its Leader",
        "abstract": "President Trump turned American foreign policy inside out, to the benefit of some nations and consternation of others. Now both groups are watching attentively to see which direction the U.S. goes next.",
        "url": "https://www.nytimes.com/2020/10/31/world/middleeast/world-us-election-response.html",
        "uri": "nyt://article/ceda8455-be73-50d1-9415-d16d1e251c9a",
        "byline": "By David M. Halbfinger",
        "item_type": "Article",
        "updated_date": "2020-11-01T12:44:37-05:00",
        "created_date": "2020-10-31T05:03:24-04:00",
        "published_date": "2020-10-31T05:03:24-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020",
          "United States International Relations",
          "United States Politics and Government"
        ],
        "org_facet": [],
        "per_facet": [
          "Trump, Donald J",
          "Biden, Joseph R Jr"
        ],
        "geo_facet": [
          "Europe",
          "Russia",
          "China",
          "Israel",
          "Middle East",
          "South Korea"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/11/01/world/01elections-world-print1/merlin_160428321_fca8518f-9005-4970-95d6-c11f07c16bca-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1367,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Israel&rsquo;s government has been showered with favors by the Trump administration. A Trump loss would be a loss for Prime Minister Benjamin Netanyahu.",
            "copyright": "Sergey Ponomarev for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/world/01elections-world-print1/30elections-world-ledesub-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Israel&rsquo;s government has been showered with favors by the Trump administration. A Trump loss would be a loss for Prime Minister Benjamin Netanyahu.",
            "copyright": "Sergey Ponomarev for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/world/01elections-world-print1/30elections-world-ledesub-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Israel&rsquo;s government has been showered with favors by the Trump administration. A Trump loss would be a loss for Prime Minister Benjamin Netanyahu.",
            "copyright": "Sergey Ponomarev for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/world/01elections-world-print1/30elections-world-ledesub-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Israel&rsquo;s government has been showered with favors by the Trump administration. A Trump loss would be a loss for Prime Minister Benjamin Netanyahu.",
            "copyright": "Sergey Ponomarev for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/world/01elections-world-print1/merlin_160428321_fca8518f-9005-4970-95d6-c11f07c16bca-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Israel&rsquo;s government has been showered with favors by the Trump administration. A Trump loss would be a loss for Prime Minister Benjamin Netanyahu.",
            "copyright": "Sergey Ponomarev for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3oLHL1N"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Americans Surge to Polls: ‘I’m Going to Vote Like My Life Depends on It’",
        "abstract": "Anxious but determined, Americans are pushing through challenges like the pandemic and long lines to cast their ballot. The country is on course to surpass 150 million votes for the first time.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/early-voting.html",
        "uri": "nyt://article/e66e10f8-2fcb-5d26-acc4-f0abe58848d9",
        "byline": "By Nick Corasaniti and Stephanie Saul",
        "item_type": "Article",
        "updated_date": "2020-11-01T10:41:14-05:00",
        "created_date": "2020-10-31T05:00:19-04:00",
        "published_date": "2020-10-31T05:00:19-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Absentee Voting",
          "Voting and Voters",
          "Polls and Public Opinion",
          "Presidential Election of 2020",
          "United States Politics and Government"
        ],
        "org_facet": [
          "Democratic Party",
          "Republican Party"
        ],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Trump, Donald J"
        ],
        "geo_facet": [
          "Texas",
          "Georgia",
          "Pennsylvania"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01voting-1/merlin_179301096_2ba4205a-8fe3-4353-923e-eb4808ea1323-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1362,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Voters lined up at a polling location in Las Vegas on Friday. Twelve states, including Nevada, have surpassed 80 percent of the turnout from the last presidential election.",
            "copyright": "Bridget Bennett for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01voting-1/merlin_179301096_2ba4205a-8fe3-4353-923e-eb4808ea1323-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Voters lined up at a polling location in Las Vegas on Friday. Twelve states, including Nevada, have surpassed 80 percent of the turnout from the last presidential election.",
            "copyright": "Bridget Bennett for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01voting-1/merlin_179301096_2ba4205a-8fe3-4353-923e-eb4808ea1323-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Voters lined up at a polling location in Las Vegas on Friday. Twelve states, including Nevada, have surpassed 80 percent of the turnout from the last presidential election.",
            "copyright": "Bridget Bennett for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01voting-1/merlin_179301096_2ba4205a-8fe3-4353-923e-eb4808ea1323-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Voters lined up at a polling location in Las Vegas on Friday. Twelve states, including Nevada, have surpassed 80 percent of the turnout from the last presidential election.",
            "copyright": "Bridget Bennett for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/11/01/us/politics/01voting-1/merlin_179301096_2ba4205a-8fe3-4353-923e-eb4808ea1323-articleInline.jpg",
            "format": "Normal",
            "height": 126,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Voters lined up at a polling location in Las Vegas on Friday. Twelve states, including Nevada, have surpassed 80 percent of the turnout from the last presidential election.",
            "copyright": "Bridget Bennett for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3mF4HxS"
      },
      {
        "section": "business",
        "subsection": "media",
        "title": "Networks Pledge Caution for an Election Night Like No Other",
        "abstract": "Complicated ballot counts and a president’s baseless claims of vote-rigging are two of the challenges facing TV anchors and executives.",
        "url": "https://www.nytimes.com/2020/10/31/business/media/election-night-tv-networks.html",
        "uri": "nyt://article/eb48a877-684e-5749-b62b-a2d9e14a8e12",
        "byline": "By Michael M. Grynbaum",
        "item_type": "Article",
        "updated_date": "2020-10-31T20:24:02-04:00",
        "created_date": "2020-10-31T05:00:16-04:00",
        "published_date": "2020-10-31T05:00:16-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "News and News Media",
          "Television",
          "Cable Television",
          "Presidential Election of 2020",
          "Rumors and Misinformation",
          "Voting and Voters"
        ],
        "org_facet": [
          "NBC News",
          "CBS News",
          "CNN",
          "Fox News Channel",
          "ABC News",
          "Associated Press"
        ],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Trump, Donald J"
        ],
        "geo_facet": [
          "United States"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/business/31election-night-media-01/merlin_179294370_68caf932-f63d-409d-bea6-3301f8bccf41-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "CBS News, whose election coverage will be anchored by Norah O’Donnell, and other networks said they would stress to viewers that results might not be known Tuesday night.",
            "copyright": "CBS"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/business/31election-night-media-01/31election-night-media-01-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "CBS News, whose election coverage will be anchored by Norah O’Donnell, and other networks said they would stress to viewers that results might not be known Tuesday night.",
            "copyright": "CBS"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/business/31election-night-media-01/31election-night-media-01-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "CBS News, whose election coverage will be anchored by Norah O’Donnell, and other networks said they would stress to viewers that results might not be known Tuesday night.",
            "copyright": "CBS"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/business/31election-night-media-01/merlin_179294370_68caf932-f63d-409d-bea6-3301f8bccf41-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "CBS News, whose election coverage will be anchored by Norah O’Donnell, and other networks said they would stress to viewers that results might not be known Tuesday night.",
            "copyright": "CBS"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/business/31election-night-media-01/merlin_179294370_68caf932-f63d-409d-bea6-3301f8bccf41-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "CBS News, whose election coverage will be anchored by Norah O’Donnell, and other networks said they would stress to viewers that results might not be known Tuesday night.",
            "copyright": "CBS"
          }
        ],
        "short_url": "https://nyti.ms/3jHsEmf"
      },
      {
        "section": "upshot",
        "subsection": "",
        "title": "The Yarn Store Would Like You to Vote",
        "abstract": "And so would nearly every company out there this year.",
        "url": "https://www.nytimes.com/2020/10/31/upshot/voting-brands-companies.html",
        "uri": "nyt://article/334102ea-d2ed-556b-82ce-452fe61770a8",
        "byline": "By Margot Sanger-Katz",
        "item_type": "Article",
        "updated_date": "2020-10-31T11:55:03-04:00",
        "created_date": "2020-10-31T05:00:13-04:00",
        "published_date": "2020-10-31T05:00:13-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Voting and Voters",
          "Social Media",
          "Presidential Election of 2020",
          "Advertising and Marketing",
          "Online Advertising"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/upshot/31up-vote-promo/31up-vote-promo-superJumbo.png",
            "format": "superJumbo",
            "height": 388,
            "width": 600,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/upshot/31up-vote-promo/31up-vote-promo-thumbStandard.png",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/upshot/31up-vote-promo/31up-vote-promo-thumbLarge.png",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/upshot/31up-vote-promo/31up-vote-promo-mediumThreeByTwo210.png",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/upshot/31up-vote-promo/31up-vote-promo-articleInline.png",
            "format": "Normal",
            "height": 123,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/35Tj76X"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Trump Dismisses Virus Coverage and Biden Dismisses Virus Leadership: This Week in the 2020 Race",
        "abstract": "President Trump has complained this week of what he calls a media obsession with the coronavirus pandemic. The message from Democrats has been united — all coronavirus, all the time.",
        "url": "https://www.nytimes.com/2020/10/31/us/politics/trump-dismisses-virus-coverage-and-biden-dismisses-virus-leadership-this-week-in-the-2020-race.html",
        "uri": "nyt://article/ec62087d-b4da-59c1-bfde-6ca2f322737f",
        "byline": "By Astead W. Herndon and Annie Karni",
        "item_type": "Article",
        "updated_date": "2020-10-31T15:46:21-04:00",
        "created_date": "2020-10-31T05:00:04-04:00",
        "published_date": "2020-10-31T05:00:04-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Presidential Election of 2020"
        ],
        "org_facet": [],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Trump, Donald J"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31MOMENTS1/merlin_179258745_c0a457bb-8b2c-466c-bec3-726db1fb2941-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Joseph R. Biden Jr. at a campaign drive-in rally at Broward College in Coconut Creek, Fla.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31MOMENTS1/31MOMENTS1-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Joseph R. Biden Jr. at a campaign drive-in rally at Broward College in Coconut Creek, Fla.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31MOMENTS1/31MOMENTS1-thumbLarge.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Joseph R. Biden Jr. at a campaign drive-in rally at Broward College in Coconut Creek, Fla.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31MOMENTS1/merlin_179258745_c0a457bb-8b2c-466c-bec3-726db1fb2941-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Joseph R. Biden Jr. at a campaign drive-in rally at Broward College in Coconut Creek, Fla.",
            "copyright": "Erin Schaff/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/us/politics/31MOMENTS1/merlin_179258745_c0a457bb-8b2c-466c-bec3-726db1fb2941-articleInline.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Joseph R. Biden Jr. at a campaign drive-in rally at Broward College in Coconut Creek, Fla.",
            "copyright": "Erin Schaff/The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3kXKTpj"
      },
      {
        "section": "nyregion",
        "subsection": "",
        "title": "He’s a Rare House Republican in a District Trump Lost. Can He Hold On?",
        "abstract": "Representative John Katko has managed to keep his seat in Central New York by distancing himself from the president. Will that be enough this year?",
        "url": "https://www.nytimes.com/2020/10/31/nyregion/house-races-katko-balter.html",
        "uri": "nyt://article/2424affc-8662-54ba-84cc-2b0c88813889",
        "byline": "By Luis Ferré-Sadurní",
        "item_type": "Article",
        "updated_date": "2020-11-01T12:44:48-05:00",
        "created_date": "2020-10-31T03:00:09-04:00",
        "published_date": "2020-10-31T03:00:09-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Elections, House of Representatives",
          "Presidential Election of 2020",
          "United States Politics and Government"
        ],
        "org_facet": [
          "House of Representatives",
          "Democratic Congressional Campaign Committee"
        ],
        "per_facet": [
          "Balter, Dana",
          "Brindisi, Anthony",
          "Tenney, Claudia",
          "Katko, John (1962- )"
        ],
        "geo_facet": [
          "Syracuse (NY)",
          "New York State"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2020/10/31/nyregion/31ny-houseraces1/31ny-houseraces1-superJumbo-v3.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Representative John M. Katko has voted for most G.O.P. priorities, but he was one of 20 Republicans to vote against a bill to repeal the Affordable Care Act in 2017.",
            "copyright": "Anna Moneymaker for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/nyregion/31ny-houseraces1/31ny-houseraces1-thumbStandard-v3.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75,
            "type": "image",
            "subtype": "photo",
            "caption": "Representative John M. Katko has voted for most G.O.P. priorities, but he was one of 20 Republicans to vote against a bill to repeal the Affordable Care Act in 2017.",
            "copyright": "Anna Moneymaker for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/nyregion/31ny-houseraces1/31ny-houseraces1-thumbLarge-v3.jpg",
            "format": "thumbLarge",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Representative John M. Katko has voted for most G.O.P. priorities, but he was one of 20 Republicans to vote against a bill to repeal the Affordable Care Act in 2017.",
            "copyright": "Anna Moneymaker for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/nyregion/31ny-houseraces1/31ny-houseraces1-mediumThreeByTwo210-v3.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210,
            "type": "image",
            "subtype": "photo",
            "caption": "Representative John M. Katko has voted for most G.O.P. priorities, but he was one of 20 Republicans to vote against a bill to repeal the Affordable Care Act in 2017.",
            "copyright": "Anna Moneymaker for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2020/10/31/nyregion/31ny-houseraces1/31ny-houseraces1-articleInline-v3.jpg",
            "format": "Normal",
            "height": 127,
            "width": 190,
            "type": "image",
            "subtype": "photo",
            "caption": "Representative John M. Katko has voted for most G.O.P. priorities, but he was one of 20 Republicans to vote against a bill to repeal the Affordable Care Act in 2017.",
            "copyright": "Anna Moneymaker for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3jFYDn7"
      }
    ]
  }`

function getNewsData() {
    // First title of the news
    let title1 = document.createTextNode(JSON.parse(json).results[0].title)
    document.getElementById("title1").appendChild(title1)

    // First byline of the news
    let byline1 = document.createTextNode(JSON.parse(json).results[0].byline)
    document.getElementById("byline1").appendChild(byline1)

    // First about for the news 
    let about1 = document.createTextNode(JSON.parse(json).results[0].abstract)
    document.getElementById("about1").appendChild(about1)

    // Second title of the news
    let title2 = document.createTextNode(JSON.parse(json).results[1].title)
    document.getElementById("title2").appendChild(title2)

    // Second byline of the news
    let byline2 = document.createTextNode(JSON.parse(json).results[1].byline)
    document.getElementById("byline2").appendChild(byline2)

    // Second about for the news 
    let about2 = document.createTextNode(JSON.parse(json).results[1].abstract)
    document.getElementById("about2").appendChild(about2)

    // Third title of the news
    let title3 = document.createTextNode(JSON.parse(json).results[2].title)
    document.getElementById("title3").appendChild(title3)

    // Third byline of the news
    let byline3 = document.createTextNode(JSON.parse(json).results[2].byline)
    document.getElementById("byline3").appendChild(byline3)

    // Third about for the news 
    let about3 = document.createTextNode(JSON.parse(json).results[2].abstract)
    document.getElementById("about3").appendChild(about3)

    // Fourth title of the news
    let title4 = document.createTextNode(JSON.parse(json).results[3].title)
    document.getElementById("title4").appendChild(title4)

    // Fourth byline of the news
    let byline4 = document.createTextNode(JSON.parse(json).results[3].byline)
    document.getElementById("byline4").appendChild(byline4)

    // Fourth about for the news 
    let about4 = document.createTextNode(JSON.parse(json).results[3].abstract)
    document.getElementById("about4").appendChild(about4)

    // Fifth title of the news
    let title5 = document.createTextNode(JSON.parse(json).results[4].title)
    document.getElementById("title5").appendChild(title5)

    // Fifth byline of the news
    let byline5 = document.createTextNode(JSON.parse(json).results[4].byline)
    document.getElementById("byline5").appendChild(byline5)

    // Fifth about for the news 
    let about5 = document.createTextNode(JSON.parse(json).results[4].abstract)
    document.getElementById("about5").appendChild(about5)

    // Sixth title of the news
    let title6 = document.createTextNode(JSON.parse(json).results[5].title)
    document.getElementById("title6").appendChild(title6)

    // Sixth byline of the news
    let byline6 = document.createTextNode(JSON.parse(json).results[5].byline)
    document.getElementById("byline6").appendChild(byline6)

    // Sixth about for the news 
    let about6 = document.createTextNode(JSON.parse(json).results[5].abstract)
    document.getElementById("about6").appendChild(about6)
}

// "results": [
//     {
//       "section": "us",
//       "subsection": "politics",
//       "title": "Election at Hand, Biden Leads Trump in Four Key States, Poll Shows",
//       "abstract": "Joseph R. Biden Jr. leads President Trump in Pennsylvania, Florida, Arizona and, by a wide margin, in Wisconsin, according to a Times/Siena College poll.",
//       "url": "https://www.nytimes.com/2020/11/01/us/politics/biden-trump-poll-florida-pennsylvania-wisconsin.html",
//       "uri": "nyt://article/6dde3182-4544-51a0-ba43-57b32206576c",
//       "byline": "By Alexander Burns and Jonathan Martin",
//       "item_type": "Article",
//       "updated_date": "2020-11-01T13:01:10-05:00",
//       "created_date": "2020-11-01T05:00:22-05:00",
//       "published_date": "2020-11-01T05:00:22-05:00",
//       "material_type_facet": "",
//       "kicker": "",
//       "des_facet": [
//         "Presidential Election of 2016",
//         "Presidential Election of 2020",
//         "Polls and Public Opinion",
//         "United States Politics and Government"
//       ],