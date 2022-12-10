const mongoose = require('mongoose')

const url = process.env.MONGODB_URI_PRODUCTS
console.log('connecting to', url)
 
mongoose.connect(url)
  .then(result => {
      console.log('connected to MongoDB')
  })
  .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
})

[
    {
      id: 1,
      name: "Erä pannu",
      price: 599.99,
      stock: 50,
      description: "Kuolet ilman tätä",
      photo: 'https://images.unsplash.com/photo-1593369936512-7ab82a937dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2Njg5MzY&ixlib=rb-4.0.3&q=80&w=200'
     ,
      details: [
        {
          label: "Pannu",
          value: "20 senttii kertaa 20 senttii"
        },
        {
          label: "Materiaali",
          value: "Myrkyt ja uhanalaiset eläimet"
        }
      ]
    },
    {
      id: 2,
      name: "Vaelluskengät",
      price: 43.88,
      stock: 20,
      description: "Huippu kestävät vaelluskengät vaativaan kompasteluun",
      photo: 'https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2NjkwMjc&ixlib=rb-4.0.3&q=80&w=200',
      details: [
        {
          label: "Väri",
          value: "Tylsän beige/sinappikakka"
        },
        {
          label: "Materiaali",
          value: "Puuta ja nahkaa"
        }
      ]
    },
    {
      id: 3,
      name: "Vaellushärkä",
      price: 1250.00,
      stock: 3,
      description: "Kunnon vaellushärkä, unohda turha reppu ja ole moderni seikkailija",
      photo: 'https://images.unsplash.com/photo-1667405653780-5ff661b43437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2NjkwOTc&ixlib=rb-4.0.3&q=80&w=200',
      details: [
        {
          label: "Väri",
          value: "Katso kuvasta"
        },
        {
          label: "Materiaali",
          value: "Verta, lihaa ja karvoja"
        }
      ]
    },
    {
      id: 4,
      name: "Ruokailusetti",
      price: 75,
      stock: 100,
      description: "Voit syödä sivistyneesti myös metsässä",
      photo: 'https://images.unsplash.com/photo-1582828462913-ff94884827ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2NjkxODI&ixlib=rb-4.0.3&q=80&w=200',
      details: [
        {
          label: "Väri",
          value: "Hopea"
        },
        {
          label: "Materiaali",
          value: "Metallica"
        }
      ]
    },
    {
      id: 5,
      name: "Selviytymiskirja",
      price: 25,
      stock: 15,
      description: "Leppoisaa luettavaa kun hätä yllättää",
      photo: 'https://images.unsplash.com/photo-1625391134693-89cd9891e940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2NjkyNDg&ixlib=rb-4.0.3&q=80&w=200',
      details: [ 
        {
          label: "Sivuja",
          value: "2700"
        },
        {
          label: "Materiaali",
          value: "Riisipaperia"
        }
      ]
    },
    {
      id: 6,
      name: "Teltta",
      price: 250,
      stock: 7,
      description: "Kun kotona menee hermot, ota tämä huipputeltta ja juokse metsään",
      photo: 'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2NjkyOTA&ixlib=rb-4.0.3&q=80&w=200',
      details: [ 
        {
          label: "Väri",
          value: "Maastokuvio"
        },
        {
          label: "Materiaali",
          value: "Mursunnahkaa"
        }
      ]
    },
    {
      id: 7,
      name: "Lapio",
      price: 799,
      stock: 35,
      description: "Jos karhu tulee vastaan niin tällä lapiolla kaivat itsellesi nopeasti kuopan",
      photo: 'https://images.unsplash.com/photo-1636305704742-635011ea5b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2Njk1OTQ&ixlib=rb-4.0.3&q=80&w=200',
      details: [ 
        {
          label: "Väri",
          value: "Musta"
        },
        {
          label: "Materiaali",
          value: "Rautaa sen olla pitää"
        }
      ]
    },
    {
      id: 8,
      name: "Retkikeitin",
      price: 399,
      stock: 45,
      description: "Jos nälkä yllättää niin tämä keitin ei sitä vie",
      photo: 'https://images.unsplash.com/photo-1522041350204-22285237eeca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2Njk2NTI&ixlib=rb-4.0.3&q=80&w=200',
      details: [ 
        {
          label: "Väri",
          value: "Musta"
        },
        {
          label: "Materiaali",
          value: "Muovia"
        }
      ]
    },
    {
      id: 9,
      name: "Kuksa",
      price: 50,
      stock: 125,
      description: "Uskottavuuden vuoksi",
      photo: 'https://images.unsplash.com/photo-1658509565784-d425ada6c327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2Njk3MDQ&ixlib=rb-4.0.3&q=80&w=200',
      details: [ 
        {
          label: "Väri",
          value: "Puu"
        },
        {
          label: "Materiaali",
          value: "Niin hyvää puuta"
        }
      ]
    },
    {
      id: 10,
      name: "Maasto korkkarit",
      price: 25,
      stock: 30,
      description: "Jos metsään menet niin takuulla yllätyt...",
      photo: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2Njk3NTQ&ixlib=rb-4.0.3&q=80&w=200',
      details: [ 
        {
          label: "Väri",
          value: "Harmaa"
        },
        {
          label: "Materiaali",
          value: "Kiinasta, mistä sitä tietää"
        }
      ]
    },
    {
      id: 11,
      name: "Puukko",
      price: 75,
      stock: 45,
      description: "Pakollinen varuste niin metsään kuin kaduillekkin",
      photo: 'https://images.unsplash.com/photo-1580843411760-ea295173bfd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2Njk4MDI&ixlib=rb-4.0.3&q=80&w=200',
      details: [ 
        {
          label: "Väri",
          value: "Verinen"
        },
        {
          label: "Materiaali",
          value: "Zirkonium"
        }
      ]
    },
    {
      id: 12,
      name: "Kuulosuojain",
      price: 125,
      stock: 50,
      description: "Kun metsän melusaaste käy ylivoimaiseksi",
      photo: 'https://images.unsplash.com/photo-1484081064812-86e90e107fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODgxODB8MHwxfGFsbHx8fHx8fHx8fDE2NzA2NjgyODM&ixlib=rb-4.0.3&q=80&w=200',
      details: [ 
        {
          label: "Väri",
          value: "Vihreä"
        },
        {
          label: "Materiaali",
          value: "Sitäsuntätä"
        }
      ]
    }
    
  ]


const Schema = mongoose.Schema

const productSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photo: {
      type: String,
      required: true
  },
  details: [
    {
      label:{
        type: String,
        required: true
      },
      value:{
        type: String
      }
    },
    {
      label:{
        type: String,
        required: true
      },
      value:{
        type: String
      }
    }
  ]
})


const Product = mongoose.model('Product', productSchema)

const product = new Product({

// You can add new product here

})


productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


product.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})




  