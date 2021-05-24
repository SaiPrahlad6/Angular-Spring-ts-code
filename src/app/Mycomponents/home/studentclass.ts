
import Students from './College_details Task.json';
export class Studentclass {

    public static StudentList: { name: string, year_founded: string, state: string, city: string, facilities: string }[] = Students;
    public static temp: string[] = [];
    public static temp2: string[] = [];
    public static fac: string[];
    public static k: number;

    public static sorting(): string[] {
        this.StudentList.forEach(element => {
            this.fac = element.facilities.split(',');
            // console.log(this.fac)
            this.temp = this.temp.concat(this.fac);
            // console.log(this.temp);

        }

        );
        console.log(this.temp);
        
        for (let i = 0; i < this.temp.length; i++){
            if (!this.temp2.includes(this.temp[i])) {
                this.temp2.push(this.temp[i]);
            }
        }
        console.log(this.temp2);
        return this.temp2;
    
    }



}
