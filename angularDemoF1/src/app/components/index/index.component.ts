import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  public swiperList:any[] = [
    {
      image: "../../../assets/F1_project/race/Saudi.png",
      month: "MAR",
      startDate: "25",
      endDate: "27",
      monthNum: "03",
      location: "Saudi Arabia",
      flag:"../../../assets/swiper_asset/2.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Australia.png",
      month: "APR",
      startDate: "08",
      endDate: "10",
      monthNum: "04",
      location: "Australia",
      flag:"../../../assets/swiper_asset/3.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Emilia.png",
      month: "APR",
      startDate: "22",
      endDate: "24",
      monthNum: "04",
      location: "Emilia",
      flag:"../../../assets/swiper_asset/4.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Miami.png",
      month: "MAY",
      startDate: "06",
      endDate: "08",
      monthNum: "05",
      location: "Miami",
      flag:"../../../assets/swiper_asset/5.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Spain.png",
      month: "MAY",
      startDate: "20",
      endDate: "22",
      monthNum: "05",
      location: "Spain",
      flag:"../../../assets/swiper_asset/6.gif"
    },
    {
      image: "../../../assets/F1_project/race/Monaco.png",
      month: "MAY",
      startDate: "27",
      endDate: "29",
      monthNum: "05",
      location: "Monaco",
      flag:"../../../assets/swiper_asset/7.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Azerbaijan.png",
      month: "JUN",
      startDate: "10",
      endDate: "12",
      monthNum: "06",
      location: "Azerbaijan",
      flag:"../../../assets/swiper_asset/8.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Canada.png",
      month: "JUN",
      startDate: "17",
      endDate: "19",
      monthNum: "06",
      location: "Canada",
      flag:"../../../assets/swiper_asset/9.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Britain.png",
      month: "JUL",
      startDate: "01",
      endDate: "03",
      monthNum: "07",
      location: "Great Britain",
      flag:"../../../assets/swiper_asset/10.gif"
    },
    {
      image: "../../../assets/F1_project/race/Austria.png",
      month: "JUL",
      startDate: "08",
      endDate: "10",
      monthNum: "07",
      location: "Austria",
      flag:"../../../assets/swiper_asset/11.gif"
    },
    {
      image: "../../../assets/F1_project/race/France.png",
      month: "JUL",
      startDate: "22",
      endDate: "24",
      monthNum: "07",
      location: "France",
      flag:"../../../assets/swiper_asset/12.gif"
    },
    {
      image: "../../../assets/F1_project/race/Hungary.png",
      month: "JUL",
      startDate: "29",
      endDate: "31",
      monthNum: "07",
      location: "Hungary",
      flag:"../../../assets/swiper_asset/13.gif"
    },
    {
      image: "../../../assets/F1_project/race/Belgium.png",
      month: "AUG",
      startDate: "26",
      endDate: "28",
      monthNum: "08",
      location: "Belgium",
      flag:"../../../assets/swiper_asset/14.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Netherlands.png",
      month: "SEP",
      startDate: "02",
      endDate: "04",
      monthNum: "09",
      location: "Netherlands",
      flag:"../../../assets/swiper_asset/15.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Italy.png",
      month: "SEP",
      startDate: "09",
      endDate: "11",
      monthNum: "09",
      location: "Italy",
      flag:"../../../assets/swiper_asset/16.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Singapore.png",
      month: "SEP-OCT",
      startDate: "30",
      endDate: "02",
      monthNum: "09",
      location: "Singapore",
      flag:"../../../assets/swiper_asset/17.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Japan.png",
      month: "OCT",
      startDate: "07",
      endDate: "09",
      monthNum: "10",
      location: "Japan",
      flag:"../../../assets/swiper_asset/18.jpg"
    },
    {
      image: "../../../assets/F1_project/race/US.png",
      month: "OCT",
      startDate: "21",
      endDate: "23",
      monthNum: "10",
      location: "United States",
      flag:"../../../assets/swiper_asset/19.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Mexico.png",
      month: "OCT",
      startDate: "28",
      endDate: "30",
      monthNum: "10",
      location: "Mexico",
      flag:"../../../assets/swiper_asset/20.jpg"
    },
    {
      image: "../../../assets/F1_project/race/Brazil.png",
      month: "NOV",
      startDate: "11",
      endDate: "13",
      monthNum: "11",
      location: "Brazil",
      flag:"../../../assets/swiper_asset/21.jpg"
    },
    {
      image: "../../../assets/F1_project/race/AbuDhabi.png",
      month: "NOV",
      startDate: "18",
      endDate: "20",
      monthNum: "11",
      location: "Abu Dhabi",
      flag:"../../../assets/swiper_asset/22.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
