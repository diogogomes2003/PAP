export class Utilizador {
    id?: string;
    email: string;
    password: string;
    FirstName: string;
    LastName: string;
    datanasc: Date;
    sexo: string;
    Contacto: number;
    pais: string;
    distrito: string;
    concelho: string;
    freguesia: string;
    Morada: string;
    CodigoPostal: string;
    ncontaban: number;
    banco: string;

  constructor(id: string, email: string, password: string, FirstName: string, LastName: string, datanasc: Date, sexo: string, Contacto: number, pais: string, distrito: string, concelho: string, freguesia: string, Morada: string, CodigoPostal: string, ncontaban: number, banco: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.datanasc = datanasc;
    this.sexo = sexo;
    this.Contacto = Contacto;
    this.pais = pais;
    this.distrito = distrito;
    this.concelho = concelho;
    this.freguesia = freguesia;
    this.Morada = Morada;
    this.CodigoPostal = CodigoPostal;
    this.ncontaban = ncontaban;
    this.banco = banco;
  }
}
