function Fedex() {
  this.calculate = package => {
    // fedex calculation
    return 2.45
  }
}

function Correio() {
  this.calculate = package => {
    // correio calculation
    return 1.56
  }
}

function Azul() {
  this.calculate = package => {
    // azul calculation
    return 4.5
  }
}

function Shipping() {
  this.company = ""
  this.setStrategy = (company) => {
    this.company = company
  }
  this.calculate = package => {
    return this.company.calculate(package)
  }
}

const fedex = new Fedex()
const correio = new Correio()
const azul = new Azul()
const package = { from: 'Alabama', to: 'Georgia', weight: 1.56 }

const shipping = new Shipping()

shipping.setStrategy(fedex)
console.log("Fedex: " + shipping.calculate(package))

shipping.setStrategy(correio)
console.log("Correio: " + shipping.calculate(package))

shipping.setStrategy(azul)
console.log("Azul: " + shipping.calculate(package))
