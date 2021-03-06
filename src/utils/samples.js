/**
 * Copyright (c) 2020 Guasam
 *
 * All information here is distributed under the GPLv3 License
 * This is a Copyleft License that gives the user the right to,
 * use copy and modify the code freely for non-commercial purposes
 *
 * @author : Guasam
 * @package : Samples
 */

export const sampleInputCss = `
body {
  background          :             red;
   }

.testing {
  padding : 1rem 2rem;
  margin: 2rem;
  color: #fffff;
}

/************************************************************************/
/* Santino Marella with The Undertaker	*/
/************************************************************************/
/* Heavy weight championship match						*/
/************************************************************************/

.calendar_title { display: inline; float: left; }

#calendar_table { border-top: 0; }

	#calendar_table td {
		font-size: 0.9em;
		vertical-align: top;
		border: 1px solid #F1F4F7;
		padding: 5px;
		height: 95px;
		width: 14%;
	}


		#calendar_table td.selected {
			background-color: #E2E9F0;
			-moz-box-shadow: 1px 1px 3px rgba(0,0,0,0.3) inset;
		}


		#calendar_table td.normal:hover { background: #EDF1F5; }


		#calendar_table td.blank {
			background: #dbe2e8;
			border-color: #dbe2e8;
		}

		#calendar_table td ul {	margin: 5px; }


	#calendar_table td.today {
		border: 2px solid #6f8f52;
		color: #6f8f52;
		background-color: #f1f6ec;
	}

#calendar_table td.col_cal_date {
	width: 7%;
	text-align: center;
	font-size: 30px;
}
#calendar_table td.col_cal_data { width: 100%; }

/* Mini calendars */
#mini_calendars { margin-top: 10px; }
#mini_calendars.two_wide .mini_cal_wrap { width: 460px; }
#mini_calendars.three_wide > div { width: 32%; }
#mini_calendars.three_wide > div.left:first-child { margin-right: 2%; }
#mini_calendars.three_wide > div.right { margin-left: 2%; }

.mini_cal_wrap { background: #fff; }
	.mini_cal_wrap h3 { margin: 10px 0 0 15px; }
	.mini_cal_wrap .ipsBox_container { 	min-height: 212px; }

.mini_cal {	margin-top: 10px; }
	.mini_cal td, .mini_cal th {
		text-align: center;
		width: 14%;
		font-size: 11px;
		height: 24px;
	}
	.mini_cal th { font-weight: bold; }

.post_wrap.vevent h3 {
	height: auto !important;
	line-height: 1 !important;
	padding: 10px !important;
}
	.post_wrap.vevent h3 .ipsUserPhoto { margin-right: 10px; }

#cal_date_wrap { line-height: 1.5; }
.cal_date_day { font: 300 84px/58px 'Helvetica Neue', helvetica, arial, sans-serif; }
.cal_date_monthyear {
	text-transform: uppercase;
	font-size: 16px;
}

/* RSVPing */
.rsvp {
	margin-top: 15px;
	padding: 10px 0 0 0;
	border-top: 1px solid #c0c0c0;
}
.rsvp > div { margin-top: 5px; }
#attendee_list { margin-top: 10px; }

.calendar_jump {
	font-size: 14px !important;
	margin: 6px 0 0 10px;
	display: inline-block;
}

.calendar_dropdown { display: inline-block; }

	#calendar_chooser_menucontent {	width: 200px; }
	#calendar_chooser_menucontent .calendar_icon { padding: 4px; }

.calendar_wrap table td.blank {
	background-color: #e7e7e7;
}

#ipboard_body .calendar_wrap table td.today {
	border: 2px solid #6f8f52;
	color: #6f8f52;
	background-color: #f1f6ec;
}

.calendar_wrap table td strong {
	font-size: 0.9em;
	font-weight: bold;
}

#ipboard_body table th.head_week {
	width: 2% !important;
}

#ipboard_body table th.view_week {
	background-color: #b6c7db;
	text-align: center;
	border: 1px solid #b6c7db;
}

/* Week view */
	div#current_calendar ol#week_view li.day {
		margin-bottom: 2px;
	}

	div#current_calendar ol#week_view li.day div {
		padding: 4px 10px 4px 75px;
		min-height: 60px;
		position: relative;
	}

	div#current_calendar ol#week_view li.day .date {
		color: #1d3652;
		font-size: 1.2em;
		text-align: center;
		padding-top: 10px;
		top: 0px;
		bottom: 0px;
		left: 0px;
		width: 65px;
		display: block;
		position: absolute;
	}

.cal_color {
	margin-right: 8px;
	padding: 0 7px;
	border-radius: 2px;
	-moz-border-radius: 2px;
	-webkit-border-radius: 2px;
}

.cal_1 {
	background-color: #971a48;
}
.cal_2 {
	background-color: #3fa711;
}
.cal_3 {
	background-color: #cd8b24;
}


.input_check.event_options {
	margin-left: 12px !important;
}

@import url("fineprint.css") print;
@import url("bluish.css") speech;
@import "common.css" screen;
@import url('landscape.css') screen and (orientation:landscape);

`;
