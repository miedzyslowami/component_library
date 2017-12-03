import React from 'react';
import PropTypes from 'prop-types';

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
        let currentMonth=this.state.currentMonth;
        let currentYear=this.state.currentYear;
        //for previuos month
        if(e.target.dataset.changemonth=='prev'){
            if(currentMonth===0){
                currentMonth=11;
                currentYear--;
            }else{
                currentMonth--;
            }
        }else{
            //for next month
            if(currentMonth===11){
                currentMonth=0;
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
        let thisDay=currentDay;
        let thisMonth=parseInt(currentMonth+1);

        thisMonth<10? (thisMonth='0'+thisMonth):thisMonth;
        thisDay<10? (thisDay='0'+thisDay):thisDay;

        let thisDate=currentYear+'-'+thisMonth+'-'+thisDay;
        let dataWeekday=new Date(thisDate).getDay();
        return 'each_day day_'+this.state.weekdays[dataWeekday];
    }

    render() {
        let numberOfDays=this.state.numberOfDays;
        let today = this.state.today;
        let todayMonth=today.getMonth();
        let todayYear=today.getFullYear();
        let todayDay=today.getDate();
        let calendar = numberOfDays.map((e,i)=>{
          return (<div className={this.setWeekday(this.state.currentYear,this.state.currentMonth,e)}
                        id={ (this.state.currentMonth===todayMonth && this.state.currentYear===todayYear && e===todayDay) ? 'today' : null} key={i}
                        onClick={this.props.handleDatePick.bind(this.state.currentYear,this.state.currentMonth,e)}>
                        {e}
                  </div>)
        });
        let weekDays = this.state.weekdays.map((e,i)=>{
            return( <div key="i">{e}</div>)
        })
        return (<div className={this.props.classname+'_'+this.state.month[this.state.currentMonth]} style={{display:this.props.display}}>
                    <div className='year'>{this.state.currentYear}</div>
                    <div className='month_picture'></div>
                    <div className='month'>
                        <img src='./images/next.svg' data-changeMonth='prev' className='button_prev' onClick={this.handleChangeMonth}/>
                        <p>{this.state.month[this.state.currentMonth]}</p>
                        <img src='./images/next.svg' data-changeMonth='next' onClick={this.handleChangeMonth} className='button_next'/>
                    </div>
                    <div className='week_days'>
                        {weekDays}
                    </div>
                    <div className='days'>{calendar}</div>
                    <div className='buttons'>
                    </div>
                </div>)
    }
}


DatePicker.propTypes = {
  passCurrentData: PropTypes.func.isRequired,
  handleDatePick:PropTypes.func.isRequired,
  classname: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired
};

DatePicker.defaultProps = {
  passCurrentData: function passCurrentData(year,month,e){console.log('dupa')},
  handleDatePick:  function handleDatePick(){console.log('dupa2')},
  classname:"dupa",
  display:"table"
};


export default DatePicker;
