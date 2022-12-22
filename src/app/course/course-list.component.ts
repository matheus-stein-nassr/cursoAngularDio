import { Component, OnInit } from "@angular/core"
import { Curso as Course } from "./curso";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.html'
})

export class CursoListComponent implements OnInit {
[x: string]: any;

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: './assets/images/forms.png',
                price: 99.99,
                code: 'XPS-1234',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 3, 2022'
            },
            {
                id: 2,
                name: 'Angular: HTML',
                imageUrl: './assets/images/http.png',
                price: 49.99,
                code: 'LKL-5678',
                duration: 50,
                rating: 5.0,
                releaseDate: 'December, 4, 2022'
            }
        ]
    }
}