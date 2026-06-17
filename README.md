# Program BeliMudah

Slicing e-commerce target (20 pages).

## First Init: Structure with Layout Components.
Struktur tree program ini dibangun dengan layout component sehingga setiap page akan dibungkus oleh layout component sendiri yang terdiri dari navbar dan footer. 

### Updated
Beberapa layout component sebagai structure:
- MainLayout
- ProfilesLayout
- DashboardLayout (admin)

## Data json:
Beberapa components dibangun secara dimanis sehingga untuk listnya sendiri akan berdasarkan jumlah datanya:

### Side Menu
```json
[
    {
        "id":"1pe",
        "name":"Pesanan Saya",
        "path":"/my-profiles",
        "icon":"/images/profilesMenu/order-mute.svg",
        "activeIcon":"/images/profilesMenu/order-blue.svg"        
    },
    ...{}
]
```

### Kategori
```json
[
    {
        "id":"1te",
        "name":"TechMaster"
    },
    ...{}
]    
```

### Tech stacks:
- React Js v19.2.14
- TailwindCss v4.3.0
- Vite v8.0.12
- Eslint v10.3.0