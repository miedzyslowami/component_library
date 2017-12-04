import React from 'react';
import PropTypes from 'prop-types';
import './fontAwsome/css/font-awesome.min.css';
import scss from './DatePicker.scss';


/** Date picker generates calendar and passes picked date to parent component */
class DatePicker extends React.Component {
    constructor (props){
        super(props)
        this.state={
            currentYear:new Date().getFullYear(),
            currentMonth:new Date().getMonth(),
            currentDay:new Date().getDate(),
            numberOfDays:[],
            month:['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays:['Sun','Mon','Tue','Wed','Thr','Fri','Sat'],
            today:new Date()
        }
    }
    componentWillMount(){
        this.props.passCurrentData(this.state.currentDay,this.state.currentMonth,this.state.currentYear);
        this.generateCalendar(this.state.currentMonth,this.state.currentYear);
    }
    handleChangeMonth =(e)=>{
        e.preventDefault();
        let currentMonth = this.state.currentMonth;
        let currentYear = this.state.currentYear;
        //for previuos month
        if(e.target.dataset.changemonth === 'prev'){
            if(currentMonth === 0){
                currentMonth = 11;
                currentYear--;
            }else{
                currentMonth--;
            }
        }else{
            //for next month
            if(currentMonth === 11){
                currentMonth = 0;
                currentYear++;
            }else{
                currentMonth++;
            }
        }
        this.setState({currentMonth:currentMonth, currentYear:currentYear});
        this.props.passCurrentData(this.state.currentDay,currentMonth,currentYear);
        this.generateCalendar(currentMonth,currentYear);
    }
    generateCalendar = (currentMonth,currentYear)=>{
        let numberOfDays=[];
        let month = this.state.month;
        if (month[currentMonth]==='February'){
            if(currentYear%4!==0){
                for(let i=1;i<=28;i++){
                    numberOfDays.push(i);
                }
            }else{
                for(let i=1;i<=28;i++){
                    numberOfDays.push(i);
                }
            }
        }
        else if(month[currentMonth]==='January' || month[currentMonth]==='March'||month[currentMonth]==='May'||month[currentMonth]==='July'||month[currentMonth]==='August'||month[currentMonth]==='October'||month[currentMonth]==='December'){
            for(let i=1;i<=31;i++){
                numberOfDays.push(i);
            }
        }else {
            for(let i=1;i<=30;i++){
                numberOfDays.push(i);
            }
        }
        this.setState({numberOfDays:numberOfDays});
    }
    setWeekday = (currentYear,currentMonth,currentDay) =>{
        let thisDay = currentDay;
        let thisMonth = parseInt((currentMonth+1),10);

        thisMonth<10 ? (thisMonth = '0' + thisMonth) : thisMonth;
        thisDay<10 ? (thisDay = '0' + thisDay) : thisDay;

        let thisDate=currentYear+'-'+thisMonth+'-'+thisDay;
        let dataWeekday=new Date(thisDate).getDay();
        return 'day_' + this.state.weekdays[dataWeekday];
    }

    render() {
        let numberOfDays=this.state.numberOfDays;
        let today = this.state.today;
        let todayMonth=today.getMonth();
        let todayYear=today.getFullYear();
        let todayDay=today.getDate();
        let calendar = numberOfDays.map((e,i)=>{
          return (<div className={scss[`${this.setWeekday(this.state.currentYear,this.state.currentMonth,e)}`] +' ' + scss.each_day}
                        id={ (this.state.currentMonth===todayMonth && this.state.currentYear===todayYear && e===todayDay) ? `${scss.today}` : null} key={i}
                        onClick={this.props.handleDatePick.bind(this.state.currentYear,this.state.currentMonth,e)}>
                        {e}
                  </div>)
        });
        let weekDays = this.state.weekdays.map((e,i)=>{
            return( <div key={i}>{e}</div>)
        })
        return (<div className={scss[this.props.classname+'_'+this.state.month[this.state.currentMonth]]}>
                    <div className={scss.year}>{this.state.currentYear}</div>
                    <div className={scss.month}>
                        <span className="fa fa-angle-left" aria-hidden="true" data-changemonth='prev' onClick={this.handleChangeMonth}></span>
                        <p>{this.state.month[this.state.currentMonth]}</p>
                        <span className="fa fa-angle-right" aria-hidden="true" data-changemonth='next' onClick={this.handleChangeMonth}></span>
                    </div>
                    <div className={scss.week_days}>
                        {weekDays}
                    </div>
                    <div className={scss.days}>{calendar}</div>
                </div>)
    }
}


DatePicker.propTypes = {
    /** function that passes current date to parent component  */
  passCurrentData: PropTypes.func.isRequired,
    /** function performed on date pick */
  handleDatePick:PropTypes.func.isRequired,
    /** Project or component name prefix  */
  classname: PropTypes.string
};

DatePicker.defaultProps = {
  passCurrentData: function passCurrentData(year,month,e){console.log(year,month,e)},
  handleDatePick:  function handleDatePick(year,month,e){console.log(year,month,e)},
  classname:"date__picker"
};


export default DatePicker;
