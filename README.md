
Summary Display UI  
this is a responsive-UI single-page React application that displays a summary/card of an incoming API (data the venues)

https://venue-lister.herokuapp.com/venues is an end-point that returns information for about 50 venues.

The format of each venue in the response is as follows:

```
{
	"id": "edd15587-633a-4bd1-b588-e72254a4f020",
	"name": "Ballsbridge Hotel",
	"address1": "Pembroke Rd",
	"postcode": "D4",
	"city": "Dublin",
	"listing_text": "When it comes to first-class conference facilities Ballsbridge..."
}
```


Key features: 


- Main Page contains Gallery, which displays 10 venue-summary cards.  

- responsive UI -  the layout responds to large/small browser width - the gallery grid as well as the individual cards respond by changing size and layout of the components accordingly.

- Easy navigation between the pages of venues via gallery controller, which component makes an assesment of how many slides are required to display incoming content.

- UI styled minimalistically with basics of global stylesheet for easy styling re-rendering.


Moving forward: 
- set up jest tests for key coponents , such as the Containers which fetch the API, 
- it would be nice to programatically generate Gallery and Grid components : set the rows and columns required and iterrate through incoming content by rendering the required structure of the Gallery Grid. 
- with designed layout references: re-render the look of the gallery
- Add spinner for loading times and Nicer failed-loading messages to improve user experience


Venue Summary Display :

![screenshot 2018-12-27 at 23 42 17](https://user-images.githubusercontent.com/30931242/50497832-4f351700-0a33-11e9-8e81-cc0fb1c8a1ce.png)

![screenshot 2018-12-27 at 23 41 35](https://user-images.githubusercontent.com/30931242/50497830-4f351700-0a33-11e9-9945-b4c9091b03f1.png)

![screenshot 2018-12-27 at 23 41 55](https://user-images.githubusercontent.com/30931242/50497831-4f351700-0a33-11e9-87bf-ac10073d6508.png)


Installation Instructions:

1. clone this project locally to your machine:
```
git clone https://github.com/Yolantele/summary-display-kata.git
```

2. change to ``` summary-display``` folder :
```
cd summary-display
```

3. install all the required dependencies while in the summary-display folder:
```
npm i
```

4. run the project ( it should open a window in your browser):
```
npm run start
```

Thank you for stopping by :]

