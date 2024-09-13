const misProductos = [
    { id: "1", nombre: "Notebook", precio: 350000, img: "../public/img/note.jpg",idcat:"compus",detalle:"Impulsa tu creatividad con la HP Envy x360 2 en 1 de 16: tecnología de IA, procesador Intel® de última generación, y diseño convertible para una experiencia sin límites. Sostenible y potente, es perfecta para ti y el planeta " },
    { id: "2", nombre: "Pc de Escritorio", precio: 500000, img: "../public/img/pc.jpg" ,idcat:"compus",detalle:"Computador Hp Prodesk 400 G1, Intel Core i5, 8gb SSD 240, Monitor 19 pulgadas"},
    { id: "3", nombre: "Tablets", precio: 276000, img: "../public/img/tablet.jpg",idcat:"compus",detalle:"Tablet Tab P11 6GB RAM 128GB WIFI 2K Gris Incluye Teclado y Lápiz Pen 2" },
    { id: "4", nombre: "Netbook", precio: 276000, img: "../public/img/netb.jpg" ,idcat:"compus",detalle:"Netbook-ordenador de 10,1 pulgadas, Quad Corer, 2GB + 64GB, ultrafino y ligero, CPU, wifi, USB, A133, nuevo"},
    { id: "5", nombre: "Mouse", precio: 3500, img: "../public/img/mouse.jpg",idcat:"peris" ,detalle:"Mouse Hp DX-110 Óptico USB Negro"},
    { id: "6", nombre: "Monitor", precio: 76000, img: "../public/img/pantalla.jpg",idcat:"peris",detalle:"Monitor AOC LED 20in HD 60hz 5ms HDMI Flicker Free 20E1H" },
    { id: "7", nombre: "Teclado", precio: 8500, img: "../public/img/teclado.jpg",idcat:"peri" ,detalle:"Teclado Usb Philco Estandar Español K51UP"},
    { id: "8", nombre: "Camara Web", precio: 30000, img: "../public/img/camara.jpg",idcat:"peri",detalle:"Cámara web SriHome SH005 Full HD 30FPS color blanco" },
    { id: "9", nombre: "Impresora", precio: 35700, img: "../public/img/impresora.jpg",idcat:"peri",detalle:"Multifuncional EPSON L5590 econtank usb Wifi Red ADF" },
    { id: "10", nombre: "Parlante", precio: 11000, img: "../public/img/parlantes.jpg" ,idcat:"peri" ,detalle:"Parlantes Mini Para Pc, Con Regulador De Volumen"},
    { id: "11", nombre: "Audifonos", precio: 11000, img: "../public/img/audifonos.jpg",idcat:"peri",detalle:"Logitech G535 Lightspeed - Auriculares inalámbricos para videojuegos, ligeros, con micrófono abatible para silenciar, estéreo, compatibles con PC, PS4, PS5, recargable por USB, color negro" },
    { id: "12", nombre: "Tarjeta de Red", precio: 17850, img: "../public/img/tred.jpg" ,idcat:"paypi" ,detalle:"Tarjeta De Red Interna Pci Rj45 10/100/1000 Dge-528t Dlink"},
    { id: "13", nombre: "Placa Madre", precio: 55450, img: "../public/img/placam.jpg",idcat:"paypis",detalle:"GIGABYTE GA-B75M-D3H S.1155 DDR3 Matx" },
    { id: "14", nombre: "Procesadores", precio: 70500, img: "../public/img/proce.jpg",idcat:"paypi",detalle:"Ryzen 9 6900HX or Ryzen 5 6600H Processor Mini PC" },  
    { id: "15", nombre: "Memoria Ram", precio: 20000, img: "../public/img/memoriar.jpg",idcat:"paypi",detalle:"Memoria Ram Kingston PC DDR4 16GB 2666MHz KVR26N19S8/16" },
    { id: "16", nombre: "Discos Duros", precio: 115000, img: "../public/img/dduro.jpg",idcat:"paypi" ,detalle:"Hd Western Digital Wd Sata De 2 Tb, 6 Gb/s, 256 Mb, Wd23purz "},
    { id: "17", nombre: "Gabinete", precio: 60000, img: "../public/img/gabinete.jpg",idcat:"paypi",detalle:"Gabinete ATX con unidad de fuente de alimentación XTQ-209 – Xtech" },
    { id: "18", nombre: "Tarjeta Controladora", precio: 27480, img: "../public/img/tcontrol.jpg",idcat:"paypi",detalle:"La tarjeta controladora Pci Usb 3.0 2 Puertos 5 Gbps de discos se utiliza para añadir más puertos de una determinado interfaz a nuestra placa base, ya sea más puertos a una ya existente o nuevos puertos a una interfaz que no poseía nuestra placa base." },
    { id: "19", nombre: "Tarjeta de Sonido", precio: 35890, img: "../public/img/tsonido.jpg" ,idcat:"paypi",detalle:"Tarjeta de Sonido PCI con Sonido Envolvente Surround 5.1" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}
export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idcat === idCategoria)
            resolve(producto)
        }, 100);

    })

}