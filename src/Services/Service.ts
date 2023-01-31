import Web3 from "web3";
import ABI from './ABI.json';


class Service{
    web3 = new Web3("http://localhost:8545")
    contract = new this.web3.eth.Contract(ABI as any, "0x5FbDB2315678afecb367f032d93F642f64180aa3");
     async auth(login: string, password: string, address: string){
        try {
            return await this.contract.methods.authAcc(login, password).call({from: address})
        } catch (error) {
            console.log(error);
        }
     }
}
 export default new Service()