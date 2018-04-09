var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
};

function loadLocate() {
    navigator.geolocation.getCurrentPosition(initialize, fail);
}

function initialize(position) {
    var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
        zoom: 7,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_canvas'),
                                  mapOptions);

    var userMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hi, I am here ...',
        draggable: true,
        icon: image
    });
}

function fail() {
    alert('navigator.geolocation failed, may not be supported');
}