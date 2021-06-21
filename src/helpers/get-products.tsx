export async function getProducts() {
  const categories = [
    {
      id: 1,
      name: "ICY GRASS JELLY"
    },
    {
      id: 2,
      name: "HOT GRASS JELLY"
    },
    {
      id: 3,
      name: "ICY TARO BALL"
    },
    {
      id: 4,
      name: "COLD TOFU PUDDINGS"
    },
    {
      id: 5,
      name: "HOT TOFU PUDDINGS"
    },
    {
      id: 6,
      name: "SHAVED ICE"
    },
    {
      id: 7,
      name: "COLD PURPLE RICE DESSERT"
    }
  ]
  const products = [
    {
      "id": 1,
      "name": "Icy Taro Ball #2",
      "image": "freshmilkteas.png",
      "price": 2,
      "description": "Magna cupidatat ipsum nulla nostrud qui ullamco exercitation officia quis officia in anim consequat et. Duis enim deserunt officia officia esse aliquip ut et exercitation. Pariatur elit proident elit fugiat est mollit sint consequat anim laboris mollit officia excepteur.\r\n",
      "addons": [
        "aute est",
        "tempor sit",
        "ad non",
        "adipisicing occaecat",
        "velit esse",
        "adipisicing incididunt",
        "in dolore"
      ],
      "category_id": 1
    },
    {
      "id": 2,
      "name": "Mung Bean Tofu Pudding",
      "image": "herbalteas.png",
      "price": 1,
      "description": "Id sint ipsum duis culpa qui ex quis. Esse mollit fugiat culpa occaecat minim ea consequat nisi adipisicing. Enim culpa quis eu Lorem Lorem voluptate et exercitation. Mollit consectetur ad aliquip enim reprehenderit qui pariatur proident dolore dolore occaecat. Pariatur aliquip tempor amet velit sunt velit cupidatat laborum magna mollit. Eu sunt esse id cupidatat exercitation proident non.\r\n",
      "addons": [
        "quis cillum",
        "incididunt nostrud",
        "mollit nisi",
        "officia laborum",
        "aliqua aliquip",
        "cupidatat elit",
        "duis ullamco"
      ],
      "category_id": 1
    },
    {
      "id": 3,
      "name": "Icy Taro Ball #1",
      "image": "hotalmondsoup.png",
      "price": 6,
      "description": "Ipsum commodo ut occaecat consectetur labore consequat sint irure proident. Est quis excepteur pariatur laboris non nostrud officia ut duis. Quis culpa tempor Lorem exercitation fugiat enim est officia qui. Labore magna fugiat ipsum cillum do elit commodo aute ad veniam. Tempor irure labore anim sunt commodo incididunt et culpa ex consequat commodo cupidatat occaecat minim. Elit aliquip ipsum amet do nulla laboris sunt cillum do excepteur.\r\n",
      "addons": [
        "elit fugiat",
        "proident excepteur",
        "ex non",
        "officia elit",
        "culpa eu",
        "duis cillum",
        "minim enim"
      ],
      "category_id": 1
    },
    {
      "id": 4,
      "name": "Icy Taro Ball #3",
      "image": "hotgrassjelly.png",
      "price": 10,
      "description": "Sunt deserunt proident non exercitation exercitation. Sunt irure veniam pariatur sint in sunt mollit labore occaecat. Adipisicing et nostrud dolor sint pariatur exercitation ut sit ullamco. Ad duis elit laboris in magna ut.\r\n",
      "addons": [
        "sit irure",
        "commodo magna",
        "consequat est",
        "nisi fugiat",
        "eiusmod eu",
        "minim ea",
        "eiusmod dolor"
      ],
      "category_id": 2
    },
    {
      "id": 5,
      "name": "Mung Bean Tofu Pudding",
      "image": "Hot-Purple-Rice-Soup-Signature.png",
      "price": 5,
      "description": "Tempor ex mollit ea et dolor labore labore anim dolor ex laborum sint excepteur ea. Tempor Lorem enim ipsum aliqua fugiat tempor pariatur. Ea cupidatat Lorem laboris laboris sit magna esse enim magna proident labore Lorem nisi anim. Est laboris ut dolore cillum nisi.\r\n",
      "addons": [
        "qui occaecat",
        "ad excepteur",
        "consectetur aliqua",
        "deserunt cupidatat",
        "ea nostrud",
        "minim laborum",
        "sit dolor"
      ],
      "category_id": 3
    },
    {
      "id": 6,
      "name": "Signature Hot Grass Jelly",
      "image": "iceygrassjelly.png",
      "price": 4,
      "description": "Consectetur consequat nostrud Lorem ipsum in nulla cupidatat aliquip elit in. Culpa velit sunt laboris qui ex tempor aliqua fugiat dolor adipisicing. Ullamco est proident Lorem proident ea veniam excepteur. Eu dolor amet aliqua nostrud aliqua culpa nulla fugiat consequat consequat nostrud non cillum consequat. Nulla non eu qui laboris ipsum ipsum irure consequat amet ex enim. Voluptate et incididunt excepteur Lorem et consequat est dolor.\r\n",
      "addons": [
        "excepteur Lorem",
        "sit labore",
        "officia quis",
        "magna id",
        "enim duis",
        "culpa officia",
        "aliquip velit"
      ],
      "category_id": 4
    },
    {
      "id": 7,
      "name": "Hot Grass Jelly #2",
      "image": "pudding.png",
      "price": 3,
      "description": "Enim ad elit excepteur nulla. Adipisicing laboris fugiat eiusmod deserunt cupidatat adipisicing sint dolor irure nisi. Lorem occaecat occaecat mollit ea laborum sunt officia voluptate exercitation qui qui.\r\n",
      "addons": [
        "incididunt nostrud",
        "aliqua qui",
        "est eiusmod",
        "deserunt ea",
        "dolore anim",
        "nisi dolore",
        "elit enim"
      ],
      "category_id": 4
    },
    {
      "id": 8,
      "name": "Signature Hot Grass Jelly",
      "image": "smallbites.png",
      "price": 10,
      "description": "Reprehenderit excepteur ut minim eu laborum cillum eu. Tempor aliqua et adipisicing veniam tempor culpa non consectetur minim occaecat nulla et sit. Velit occaecat amet officia aute cillum consectetur sit amet ea eiusmod pariatur sunt.\r\n",
      "addons": [
        "enim amet",
        "ex aute",
        "ipsum ut",
        "cillum veniam",
        "aliquip consequat",
        "Lorem sit",
        "irure excepteur"
      ],
      "category_id": 5
    },
    {
      "id": 9,
      "name": "Signature Hot Grass Jelly",
      "image": "soymilkseries.png",
      "price": 10,
      "description": "Ea sit irure non nostrud eiusmod reprehenderit minim excepteur. Culpa veniam proident deserunt reprehenderit cupidatat. Cillum do excepteur enim do deserunt enim consectetur elit amet. Quis nostrud eu excepteur labore. Minim id ipsum officia sit cillum commodo eiusmod proident.\r\n",
      "addons": [
        "pariatur voluptate",
        "ea sit",
        "ipsum in",
        "minim mollit",
        "eiusmod consequat",
        "aute ea",
        "anim elit"
      ],
      "category_id": 5
    },
    {
      "id": 10,
      "name": "Icy Grass Jelly #2",
      "image": "taro-ball.png",
      "price": 2,
      "description": "Est elit quis velit culpa amet. Elit eiusmod incididunt velit exercitation sunt ea veniam magna. Velit ipsum labore pariatur sunt labore. Mollit labore eiusmod sunt consequat Lorem. Qui fugiat cillum qui nostrud laborum aliqua culpa culpa in. Magna nulla dolor aliquip mollit voluptate ut ut consectetur laborum. Ut in adipisicing ad sit reprehenderit irure aute eu ex.\r\n",
      "addons": [
        "proident eiusmod",
        "consectetur reprehenderit",
        "officia fugiat",
        "quis non",
        "consequat voluptate",
        "pariatur dolor",
        "voluptate reprehenderit"
      ],
      "category_id": 6
    },
    {
      "id": 11,
      "name": "Icy Taro Ball #2",
      "image": "Taro-Ball-Signature.png",
      "price": 3,
      "description": "Consequat in ut Lorem consectetur et aute ut id consectetur ut. Laborum ex aliqua exercitation labore aliquip ullamco cillum cupidatat dolore voluptate ex. Reprehenderit qui adipisicing Lorem mollit tempor. Aliquip ipsum et exercitation occaecat fugiat anim do cillum mollit duis nisi.\r\n",
      "addons": [
        "laboris irure",
        "qui mollit",
        "eiusmod sunt",
        "in magna",
        "minim exercitation",
        "dolor culpa",
        "elit culpa"
      ],
      "category_id": 6
    },
    {
      "id": 12,
      "name": "Icy Taro Ball #3",
      "image": "tarobowl.png",
      "price": 6,
      "description": "Sint do excepteur velit cillum ex mollit sint incididunt exercitation nisi ad. Est occaecat magna magna exercitation quis reprehenderit tempor est qui adipisicing commodo enim non. Tempor tempor id nisi aute eiusmod et duis aliqua deserunt. Laborum voluptate est occaecat qui deserunt. Veniam cillum reprehenderit occaecat velit in adipisicing magna labore ad incididunt sit velit aute quis. Aliquip voluptate laboris amet cillum quis. Exercitation nisi nostrud ad exercitation eu tempor sunt aliquip enim veniam sint voluptate esse ipsum.\r\n",
      "addons": [
        "deserunt minim",
        "ea dolore",
        "nisi fugiat",
        "aliquip est",
        "consequat proident",
        "sint aliquip",
        "nulla commodo"
      ],
      "category_id": 6
    },
    {
      "id": 13,
      "name": "Signature Hot Grass Jelly",
      "image": "teas.png",
      "price": 9,
      "description": "Exercitation labore in consectetur incididunt nostrud nulla veniam cupidatat mollit sint deserunt. Ut minim aliqua et deserunt minim id deserunt eu aliqua cupidatat esse magna nulla culpa. Anim mollit occaecat consequat nisi adipisicing mollit qui esse nulla adipisicing non anim.\r\n",
      "addons": [
        "exercitation eu",
        "reprehenderit mollit",
        "excepteur proident",
        "in labore",
        "pariatur irure",
        "cupidatat nulla",
        "magna mollit"
      ],
      "category_id": 7
    },
    {
      "id": 14,
      "name": "Icy Grass Jelly #3",
      "image": "tofupudding.png",
      "price": 1,
      "description": "Eu Lorem voluptate non est incididunt mollit proident non Lorem minim dolore cillum. Cupidatat occaecat voluptate reprehenderit cupidatat cupidatat occaecat id. Consectetur quis anim cupidatat qui quis consectetur tempor enim. Lorem aliquip sunt ullamco voluptate pariatur qui culpa fugiat ea esse consequat duis.\r\n",
      "addons": [
        "velit deserunt",
        "Lorem commodo",
        "consequat mollit",
        "nulla ullamco",
        "eiusmod commodo",
        "ipsum et",
        "in id"
      ],
      "category_id": 7
    }
  ]
  let pr = [...products.map(item => {
    return {...item, category: categories.filter(cat => cat.id == item.category_id)[0].name}
  })]
  return pr;
}
