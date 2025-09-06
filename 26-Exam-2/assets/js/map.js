


const mapLink = document.getElementById('load-map-link')

mapLink.onclick = function(e){
    e.preventDefault()
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', 'assets/js/plugins/leaflet/leaflet.css')
    document.head.append(link)

    const script = document.createElement('script')
    script.src = 'assets/js/plugins/leaflet/leaflet.js'
    script.onload = initMap
    document.body.append(script)
}

function initMap(){
    mapLink.remove()
    
    const map = L.map('map').setView([51.50764, -0.08126213386472052], 14);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);
    
    const customIcon = L.icon({
        iconUrl: 'assets/images/map/pin.svg',
        iconSize:     [106, 106],    
        shadowSize:   [0, 0],      
        iconAnchor:   [15, 30],    
        shadowAnchor: [0, 0],      
        popupAnchor:  [0, -30]    
    });
    
    L.marker([51.51474, -0.08034], {icon: customIcon}).addTo(map)
        .bindPopup(`<div id="map-info">
                <div class="news-img-wrap">
                    <img src="assets/images/map/mainoffice.webp" alt="main office">
                </div>
                <h4>Main office.</h4>
                <p>30 St Mary Axe, London EC3A 8BF, Great Britain</p>
            </div>`)            
}