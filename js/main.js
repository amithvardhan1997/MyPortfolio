/**
 * =================================================================== 
 *
 *  Kards v1.0 Main Stylesheet
 *  url: styleshout.com
 *  03-01-2016
 *  ------------------------------------------------------------------
 *  TOC:
 *  01. webfonts and iconfonts
 *  02. base style overrides
 *  03. typography & general theme styles
 *  04. preloader
 *  05. forms
 *  06. buttons 
 *  07. other components
 *  08. common styles
 *  09. header styles
 *  10. intro
 *  11. about
 *  12. resume
 *  13. portfolio
 *  14. call-to-action section
 *  15. services
 *  16. stats
 *  17. contact
 *  18. footer
 *
 * =================================================================== 
 */


/** 
 * ===================================================================
 * 01. webfonts and iconfonts - (_document-setup.scss)
 *
 * ------------------------------------------------------------------- 
 */
@import url("fonts.css");
@import url("font-awesome/css/font-awesome.min.css");
@import url("micons/micons.css");


/** 
 * ===================================================================
 * 02. base style overrides - (_document-setup.scss)
 *
 * ------------------------------------------------------------------- 
 */
html {
	font-size: 10px;
}

@media only screen and (max-width:1024px) {
	html {
		font-size: 9.411764705882353px;
	}
}
@media only screen and (max-width:768px) {
	html {
		font-size: 10px;
	}
}
@media only screen and (max-width:400px) {
	html {
		font-size: 9.411764705882353px;
	}
}

html, body {
	height: 100%;
}
body {
	background: #151515;
	font-family: "lora-regular", serif;
	font-size: 1.7rem;
	line-height: 3rem;
	color: #6e6e6e;
}

/**
 * links - (_document-setup.scss)
 * -------------------------------------------------------------------
 */
a, a:visited {
	color: #000000;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}
a:hover, a:focus, a:active {
	color: #ff6a3c;
	outline: 0;
}

/** 
 * ===================================================================
 * 03. typography & general theme styles - (_document-setup.scss)
 *
 * ------------------------------------------------------------------- 
 */
h1, h2, h3, h4, h5, h6, .h01, .h02, .h03, .h04, .h05, .h06 {
	font-family: "poppins-semibold", sans-serif;
	color: #313131;
	font-style: normal;
	text-rendering: optimizeLegibility;
	margin-bottom: 2.1rem;
}
h3, .h03, h4, .h04 {
	margin-bottom: 1.8rem;
}
h5, .h05, h6, .h06 {
	font-family: "poppins-bold";
	margin-bottom: 1.2rem;
}
h1, .h01 {
	font-size: 3.1rem;
	line-height: 1.355;
	letter-spacing: -.1rem;
}
@media only screen and (max-width:600px) {
	h1, .h01 {
		font-size: 2.6rem;
		letter-spacing: -.07rem;
	}
}
h2, .h02 {
	font-size: 2.4rem;
	line-height: 1.25;
}
h3, .h03 {
	font-size: 2rem;
	line-height: 1.5;
}
h4, .h04 {
	font-size: 1.7rem;
	line-height: 1.765;
}
h5, .h05 {
	font-size: 1.4rem;
	line-height: 1.714;
	text-transform: uppercase;
	letter-spacing: .15rem;
}
h6, .h06 {
	font-size: 1.3rem;
	line-height: 1.846;
	text-transform: uppercase;
	letter-spacing: .15rem;
}
p img {
	margin: 0;
}
p.lead {
	font-family: "lora-regular", serif;
	font-size: 2rem;
	line-height: 1.8;
	color: #888888;
}
@media only screen and (max-width:768px) {
	p.lead {
		font-size: 1.7rem;
	}
}
em, i, strong, b {
	font-size: 1.7rem;
	line-height: 3rem;
	font-style: normal;
	font-weight: normal;
}
em, i {
	font-family: "lora-italic", serif;
}
strong, b {
	font-family: "lora-bold", serif;
}
small {
	font-size: 1.2rem;
	line-height: inherit;
}
blockquote {
	margin: 3rem 0;
	padding-left: 4rem;
	position: relative;
}
blockquote:before {
	content: "\201C";
	font-size: 8rem;
	line-height: 0px;
	margin: 0;
	color: #313131;
	font-family: arial, sans-serif;
	position: absolute;
	top: 3rem;
	left: 0;
}
blockquote p {
	font-family: georgia, serif;
	font-style: italic;
	padding: 0;
	font-size: 1.9rem;
	line-height: 1.737;
}
blockquote cite {
	display: block;
	font-size: 1.3rem;
	font-style: normal;
	line-height: 1.616;
}
blockquote cite:before {
	content: "\2014 \0020";
}
blockquote cite a, blockquote cite a:visited {
	color: #888888;
	border: none;
}
abbr {
	font-family: "poppins-bold", serif;
	font-variant: small-caps;
	text-transform: lowercase;
	letter-spacing: .05rem;
	color: #888888;
}
var, kbd, samp, code, pre {
	font-family: Consolas, "Andale Mono", Courier, "Courier New", monospace;
}
pre {
	padding: 2.4rem 3rem 3rem;
	background: #F1F1F1;
}
code {
	font-size: 1.4rem;
	margin: 0 .2rem;
	padding: .3rem .6rem;
	white-space: nowrap;
	background: #F1F1F1;
	border: 1px solid #E1E1E1;
	border-radius: 3px;
}
pre > code {
	display: block;
	white-space: pre;
	line-height: 2;
	padding: 0;
	margin: 0;
}
pre.prettyprint > code {
	border: none;
}
del {
	text-decoration: line-through;
}
abbr[title], dfn[title] {
	border-bottom: 1px dotted;
	cursor: help;
}
mark {
	background: #FFF49B;
	color: #000;
}
hr {
	border: solid #d2d2d2;
	border-width: 1px 0 0;
	clear: both;
	margin: 2.4rem 0 1.5rem;
	height: 0;
}

/**
 * Lists - (_document-setup.scss)  
 * -------------------------------------------------------------------
 */
ol {
	list-style: decimal;
}
ul {
	list-style: disc;
}
li {
	display: list-item;
}
ol, ul {
	margin-left: 1.7rem;
}
ul li {
	padding-left: .4rem;
}
ul ul, ul ol, ol ol, ol ul {
	margin: .6rem 0 .6rem 1.7rem;
}
ul.disc li {
	display: list-item;
	list-style: none;
	padding: 0 0 0 .8rem;
	position: relative;
}
ul.disc li::before {
	content: "";
	display: inline-block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #ff6a3c;
	position: absolute;
	left: -17px;
	top: 11px;
	vertical-align: middle;
}
dt {
	margin: 0;
	color: #3700ff;
}
dd {
	margin: 0 0 0 2rem;
}

/**
 * tables - (_document-setup.scss)  
 * -------------------------------------------------------------------
 */
table {
	border-width: 0;
	width: 100%;
	max-width: 100%;
	font-family: "lora-regular", sans-serif;
}
th, td {
	padding: 1.5rem 3rem;
	text-align: left;
	border-bottom: 1px solid #E8E8E8;
}
th {
	color: #313131;
	font-family: "poppins-bold", sans-serif;
}
td {
	line-height: 1.5;
}
th:first-child, td:first-child {
	padding-left: 0;
}
th:last-child, td:last-child {
	padding-right: 0;
}
.table-responsive {
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
}

/**
 * Spacing - (_document-setup.scss)  
 * -------------------------------------------------------------------
 */
button, .button {
	margin-bottom: 1.2;
}
fieldset {
	margin-bottom: 1.5rem;
}
input,
textarea,
select,
pre,
blockquote,
figure,
table,
p,
ul,
ol,
dl,
form,
.fluid-video-wrapper,
.ss-custom-select {
	margin-bottom: 3rem;
}

/**
 * floated image - (_document-setup.scss)  
 * -------------------------------------------------------------------
 */
img.pull-right {
	margin: .9rem 0 0 2.4rem;
}
img.pull-left {
	margin: .9rem 2.4rem 0 0;
}

/**
 * block grid paddings - (_document-setup.scss) 
 * -------------------------------------------------------------------
 */
.bgrid {
	padding: 0 20px;
}
@media only screen and (max-width:1024px) {
	.bgrid {
		padding: 0 18px;
	}
}
@media only screen and (max-width:768px) {
	.bgrid {
		padding: 0 15px;
	}
}
@media only screen and (max-width:600px) {
	.bgrid {
		padding: 0 10px;
	}
}
@media only screen and (max-width:400px) {
	.bgrid {
		padding: 0;
	}
}

/**
 * pace.js styles - minimal  - (_document-setup.scss)
 * -------------------------------------------------------------------
 */
.pace {
	-webkit-pointer-events: none;
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}
.pace-inactive {
	display: none;
}
.pace .pace-progress {
	background: #ff6a3c;
	position: fixed;
	z-index: 900;
	top: 0;
	right: 100%;
	width: 100%;
	height: 6px;
}

/** 
 * ===================================================================
 * 04. preloader - (_preloader-1.scss)
 *
 * ------------------------------------------------------------------- 
 */
#preloader {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #151515;
	z-index: 800;
	height: 100%;
	width: 100%;
}
.no-js #preloader, .oldie #preloader {
	display: none;
}
#loader {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 60px;
	height: 60px;
	margin: -30px 0 0 -30px;
	padding: 0;
}
#loader:before {
	content: "";
	border-top: 11px solid rgba(255, 255, 255, 0.1);
	border-right: 11px solid rgba(255, 255, 255, 0.1);
	border-bottom: 11px solid rgba(255, 255, 255, 0.1);
	border-left: 11px solid #ff6a3c;
	-webkit-animation: load 1.1s infinite linear;
	animation: load 1.1s infinite linear;
	display: block;
	border-radius: 50%;
	width: 60px;
	height: 60px;
}
@-webkit-keyframes load {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@keyframes load {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

/** 
 * ===================================================================
 * 05. forms - (_forms.scss)
 *
 * ------------------------------------------------------------------- 
 */
fieldset {
	border: none;
}
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea,
select {
	display: block;
	height: 6rem;
	padding: 1.5rem 0;
	border: 0;
	outline: none;
	vertical-align: middle;
	color: #313131;
	font-family: "poppins-regular", sans-serif;
	font-size: 1.5rem;
	line-height: 3rem;
	max-width: 100%;
	background: transparent;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}
.ss-custom-select {
	position: relative;
	padding: 0;
}
.ss-custom-select select {
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
	text-indent: 0.01px;
	text-overflow: '';
	margin: 0;
	line-height: 3rem;
	vertical-align: middle;
}
.ss-custom-select select option {
	padding-left: 2rem;
	padding-right: 2rem;
}
.ss-custom-select select::-ms-expand {
	display: none;
}
.ss-custom-select::after {
	content: '\f0d7';
	font-family: 'FontAwesome';
	position: absolute;
	top: 50%;
	right: 1.5rem;
	margin-top: -10px;
	bottom: auto;
	width: 20px;
	height: 20px;
	line-height: 20px;
	font-size: 18px;
	text-align: center;
	pointer-events: none;
	color: #252525;
}

/* IE9 and below */
.oldie .ss-custom-select::after {
	display: none;
}
textarea {
	min-height: 25rem;
}
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="text"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
	color: #ff6a3c;
	border-bottom: 1px solid #ff6a3c;
}
label, legend {
	font-family: "poppins-bold", sans-serif;
	font-size: 1.4rem;
	margin-bottom: .6rem;
	color: #3b3b3b;
	display: block;
}
input[type="checkbox"], input[type="radio"] {
	display: inline;
}
label > .label-text {
	display: inline-block;
	margin-left: 1rem;
	font-family: "poppins-regular", sans-serif;
	line-height: inherit;
}
label > input[type="checkbox"], label > input[type="radio"] {
	margin: 0;
	position: relative;
	top: .15rem;
}

/**
 * Style Placeholder Text  
 * -
 */
::-webkit-input-placeholder {
	color: #a1a1a1;
}
:-moz-placeholder {
	color: #a1a1a1;  /* Firefox 18- */
}
::-moz-placeholder {
	color: #a1a1a1;  /* Firefox 19+ */
}
:-ms-input-placeholder {
	color: #a1a1a1;
}
.placeholder {
	color: #a1a1a1 !important;
}

/** 
 * ===================================================================
 * 06. buttons - (_button-essentials.scss)
 *
 * ------------------------------------------------------------------- 
 */
.button,
a.button,
button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
	display: inline-block;
	font-family: "poppins-bold", sans-serif;
	font-size: 1.4rem;
	text-transform: uppercase;
	letter-spacing: .3rem;
	height: 5.4rem;
	line-height: 5.4rem;
	padding: 0 3rem;
	margin: 0 .3rem 1.2rem 0;
	background: #d8d8d8;
	color: #313131;
	text-decoration: none;
	cursor: pointer;
	text-align: center;
	white-space: nowrap;
	border: none;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}
.button:hover,
a.button:hover,
button:hover,
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.button:focus,
button:focus,
input[type="submit"]:focus,
input[type="reset"]:focus,
input[type="button"]:focus {
	background: #bebebe;
	color: #000000;
	outline: 0;
}
.button.button-primary,
a.button.button-primary,
button.button-primary,
input[type="submit"].button-primary,
input[type="reset"].button-primary,
input[type="button"].button-primary {
	background: #313131;
	color: #FFFFFF;
}
.button.button-primary:hover,
a.button.button-primary:hover,
button.button-primary:hover,
input[type="submit"].button-primary:hover,
input[type="reset"].button-primary:hover,
input[type="button"].button-primary:hover,
.button.button-primary:focus,
button.button-primary:focus,
input[type="submit"].button-primary:focus,
input[type="reset"].button-primary:focus,
input[type="button"].button-primary:focus {
	background: #1f1f1f;
}
button.full-width, .button.full-width {
	width: 100%;
	margin-right: 0;
}
button.medium, .button.medium {
	height: 5.7rem !important;
	line-height: 5.7rem !important;
	padding: 0 1.8rem !important;
}
button.large, .button.large {
	height: 6rem !important;
	line-height: 6rem !important;
	padding: 0rem 3rem !important;
}
button.stroke, .button.stroke {
	background: transparent !important;
	border: 3px solid #313131;
	line-height: 4.8rem;
}
button.stroke.medium, .button.stroke.medium {
	line-height: 5.1rem !important;
}
button.stroke.large, .button.stroke.large {
	line-height: 5.4rem !important;
}
button.stroke:hover, .button.stroke:hover {
	border: 3px solid #ff6a3c;
	color: #ff6a3c;
}
button::-moz-focus-inner, input::-moz-focus-inner {
	border: 0;
	padding: 0;
}


/** 
 * ===================================================================
 * 07. other components - (_others.scss)
 *
 * ------------------------------------------------------------------- 
 */

/**
 * alert box - (_alert-box.scss)
 * -------------------------------------------------------------------
 */
.alert-box {
	padding: 2.1rem 4rem 2.1rem 3rem;
	position: relative;
	margin-bottom: 3rem;
	border-radius: 3px;
	font-family: "poppins-regular", sans-serif;
	font-size: 1.5rem;
}
.alert-box .close {
	position: absolute;
	right: 1.8rem;
	top: 1.8rem;
	cursor: pointer;
}
.ss-error {
	background-color: #ffd1d2;
	color: #e65153;
}
.ss-success {
	background-color: #c8e675;
	color: #758c36;
}
.ss-info {
	background-color: #d7ecfb;
	color: #4a95cc;
}
.ss-notice {
	background-color: #fff099;
	color: #bba31b;
}

/**
 * additional typo styles - (_additional-typo.scss)
 * -------------------------------------------------------------------
 */

/**
 * drop cap 
 */
.drop-cap:first-letter {
	float: left;
	margin: 0;
	padding: 1.5rem .6rem 0 0;
	font-size: 8.4rem;
	font-family: "poppins-bold", sans-serif;
	line-height: 6rem;
	text-indent: 0;
	background: transparent;
	color: #313131;
}

/**
 * line definition style
 */
.lining dt, .lining dd {
	display: inline;
	margin: 0;
}
.lining dt + dt:before, .lining dd + dt:before {
	content: "\A";
	white-space: pre;
}
.lining dd + dd:before {
	content: ", ";
}
.lining dd + dd:before {
	content: ", ";
}
.lining dd:before {
	content: ": ";
	margin-left: -0.2em;
}

/**
 * dictionary definition style
 */
.dictionary-style dt {
	display: inline;
	counter-reset: definitions;
}
.dictionary-style dt + dt:before {
	content: ", ";
	margin-left: -0.2em;
}
.dictionary-style dd {
	display: block;
	counter-increment: definitions;
}
.dictionary-style dd:before {
	content: counter(definitions, decimal) ". ";
}

/** 
 * Pull Quotes
 * -----------
 * markup:
 *
 * <aside class="pull-quote">
 *		<blockquote>
 *			<p></p>
 *		</blockquote>
 *	</aside>
 *
 * --------------------------------------------------------------------- 
 */
.pull-quote {
	position: relative;
	padding: 2.1rem 3rem 2.1rem 0px;
}
.pull-quote:before, .pull-quote:after {
	height: 1em;
	position: absolute;
	font-size: 8rem;
	font-family: Arial, Sans-Serif;
	color: #333;
}
.pull-quote:before {
	content: "\201C";
	top: 33px;
	left: 0;
}
.pull-quote:after {
	content: '\201D';
	bottom: -33px;
	right: 0;
}
.pull-quote blockquote {
	margin: 0;
}
.pull-quote blockquote:before {
	content: none;
}

/** 
 * Stats Tab
 * ---------
 * markup:
 *
 * <ul class="stats-tabs">
 *		<li><a href="#">[value]<em>[name]</em></a></li>
 *	</ul>
 *
 * Extend this object into your markup.
 *
 * ---------------------------------------------------------------------
 */
.stats-tabs {
	padding: 0;
	margin: 3rem 0;
}
.stats-tabs li {
	display: inline-block;
	margin: 0 1.5rem 3rem 0;
	padding: 0 1.5rem 0 0;
	border-right: 1px solid #ccc;
}
.stats-tabs li:last-child {
	margin: 0;
	padding: 0;
	border: none;
}
.stats-tabs li a {
	display: inline-block;
	font-size: 2.5rem;
	font-family: "poppins-bold", sans-serif;
	border: none;
	color: #252525;
}
.stats-tabs li a:hover {
	color: #ff6a3c;
}
.stats-tabs li a em {
	display: block;
	margin: .6rem 0 0 0;
	font-size: 1.4rem;
	font-family: "poppins-regular", sans-serif;
	color: #888888;
}

/**
 * skillbars - (_skillbars.scss)
 * -------------------------------------------------------------------
 */
.skill-bars {
	list-style: none;
	margin: 6rem 0 3rem;
}
.skill-bars li {
	height: .6rem;
	background: #a1a1a1;
	width: 100%;
	margin-bottom: 6rem;
	padding: 0;
	position: relative;
}
.skill-bars li strong {
	position: absolute;
	left: 0;
	top: -3rem;
	font-family: "poppins-bold", sans-serif;
	color: #313131;
	text-transform: uppercase;
	letter-spacing: .2rem;
	font-size: 1.5rem;
	line-height: 2.4rem;
}
.skill-bars li .progress {
	background: #313131;
	position: relative;
	height: 100%;
}
.skill-bars li .progress span {
	position: absolute;
	right: 0;
	top: -3.6rem;
	display: block;
	font-family: "poppins-regular", sans-serif;
	color: white;
	font-size: 1.1rem;
	line-height: 1;
	background: #313131;
	padding: .6rem .6rem;
	border-radius: 3px;
}
.skill-bars li .progress span::after {
	position: absolute;
	left: 50%;
	bottom: -5px;
	margin-left: -5px;
	border-right: 5px solid transparent;
	border-left: 5px solid transparent;
	border-top: 5px solid #313131;
	content: "";
}

.skill-bars li .percent5   { width: 5%; }
.skill-bars li .percent10  { width: 10%; }
.skill-bars li .percent15  { width: 15%; }
.skill-bars li .percent20  { width: 20%; }
.skill-bars li .percent25  { width: 25%; }
.skill-bars li .percent30  { width: 30%; }
.skill-bars li .percent35  { width: 35%; }
.skill-bars li .percent40  { width: 40%; }
.skill-bars li .percent45  { width: 45%; }
.skill-bars li .percent50  { width: 50%; }
.skill-bars li .percent55  { width: 55%; }
.skill-bars li .percent60  { width: 60%; }
.skill-bars li .percent65  { width: 65%; }
.skill-bars li .percent70  { width: 70%; }
.skill-bars li .percent75  { width: 75%; }
.skill-bars li .percent80  { width: 80%; }
.skill-bars li .percent85  { width: 85%; }
.skill-bars li .percent90  { width: 90%; }
.skill-bars li .percent95  { width: 95%; }
.skill-bars li .percent100 { width: 100%; }


/** 
 * ===================================================================
 * 08. common styles (_layout.scss)
 *
 * ------------------------------------------------------------------- 
 */
.grey-section {
	background: #ebebeb;
}
.grey-section p.lead {
	color: #7d7d7d;
}
.section-intro {
	max-width: 700px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	margin-bottom: 3.6rem;
	position: relative;
}
.section-intro h1 {
	font-family: "poppins-semibold", serif;
	font-size: 3.6rem;
	color: #313131;
	line-height: 1.25;
	margin-bottom: 1.2rem;
}
.section-intro h5 {
	color: #ff6a3c;
	font-size: 1.6rem;
	line-height: 1.875;
	margin-bottom: 0.3rem;
	letter-spacing: .4rem;
}

/**
 * responsive:
 * common styles
 * ------------------------------------------------------------------- 
 */
@media only screen and (max-width:768px) {
	.section-intro {
		max-width: 650px;
	}
	.section-intro h1 {
		font-size: 3rem;
	}
}
@media only screen and (max-width:600px) {
	.section-intro h1 {
		font-size: 2.6rem;
	}
	.section-intro h5 {
		font-size: 1.5rem;
		letter-spacing: .3rem;
	}
}
@media only screen and (max-width:400px) {
	.section-intro h1 {
		font-size: 2.4rem;
	}
}


/** 
 * ===================================================================
 * 09. header styles - (_layout.scss)
 *
 * ------------------------------------------------------------------- 
 */
header {
	position: fixed;
	width: 100%;
	min-height: 66px;
	z-index: 600;
}
header .row {
	position: relative;
	min-height: 66px;
}
header .top-bar {
	display: block;
	background: #000000;
	min-width: 220px;
	min-height: 66px;
	position: absolute;
	left: 90px;
	top: 0;
}
header .logo {
	float: left;
	margin-left: 20px;
	margin-right: 50px;
	margin-top: 25px;
	position: relative;
}
header .logo a {
	display: block;
	margin: 0;
	padding: 0;
	border: none;
	font: 0/0 a;
	text-shadow: none;
	color: transparent;
	width: 92px;
	height: 15px;
	background: url("../images/logo.png") no-repeat center;
	background-size: 92px 15px;
}

/**
 * menu toggle - (_layout.css)
 * ------------------------------------------------------------------- 
 */
.menu-toggle {
	float: left;
	width: 40px;
	height: 40px;
	margin-left: 20px;
	margin-top: 13px;
	display: block;
	position: relative;
}
.menu-toggle span {
	display: block;
	background-color: #ff6a3c;
	width: 24px;
	height: 3px;
	margin-top: -1.5px;
	font: 0/0 a;
	text-shadow: none;
	color: transparent;
	position: absolute;
	right: 8px;
	top: 50%;
	bottom: auto;
	left: auto;
	-moz-transition: background 0.2s ease-in-out;
	-o-transition: background 0.2s ease-in-out;
	-webkit-transition: background 0.2s ease-in-out;
	-ms-transition: background 0.2s ease-in-out;
	transition: background 0.2s ease-in-out;
}
.menu-toggle span::before, .menu-toggle span::after {
	content: '';
	width: 100%;
	height: 100%;
	background-color: inherit;
	position: absolute;
	left: 0;
	-moz-transition-duration: 0.2s, 0.2s;
	-o-transition-duration: 0.2s, 0.2s;
	-webkit-transition-duration: 0.2s, 0.2s;
	-ms-transition-duration: 0.2s, 0.2s;
	transition-duration: 0.2s, 0.2s;
	-moz-transition-delay: 0.2s, 0s;
	-o-transition-delay: 0.2s, 0s;
	-webkit-transition-delay: 0.2s, 0s;
	-ms-transition-delay: 0.2s, 0s;
	transition-delay: 0.2s, 0s;
}
.menu-toggle span::before {
	top: -8px;
	-moz-transition-property: top, transform;
	-o-transition-property: top, transform;
	-webkit-transition-property: top, transform;
	-ms-transition-property: top, transform;
	transition-property: top, transform;
}
.menu-toggle span::after {
	bottom: -8px;
	-moz-transition-property: bottom, transform;
	-o-transition-property: bottom, transform;
	-webkit-transition-property: bottom, transform;
	-ms-transition-property: bottom, transform;
	transition-property: bottom, transform;
}

/* is clicked */
.menu-toggle.is-clicked span {
	background-color: rgba(255, 0, 119, 0);
}
.menu-toggle.is-clicked span::before, .menu-toggle.is-clicked span::after {
	background-color: #ff6a3c;
	-moz-transition-delay: 0s, 0.2s;
	-o-transition-delay: 0s, 0.2s;
	-webkit-transition-delay: 0s, 0.2s;
	-ms-transition-delay: 0s, 0.2s;
	transition-delay: 0s, 0.2s;
}
.menu-toggle.is-clicked span::before {
	top: 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}
.menu-toggle.is-clicked span::after {
	bottom: 0;
	-webkit-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

/* navigation panel */
#main-nav-wrap {
	display: block;
	width: 100%;
	font-family: "poppins-medium", sans-serif;
	font-size: 1.5rem;
	position: absolute;
	top: 100%;
	left: 0;
}

/* dropdown nav */
.main-navigation {
	background: #000000;
	padding: 24px 30px 42px;
	margin: 0;
	width: 100%;
	height: auto;
	clear: both;
	display: none;
}
.main-navigation > li {
	display: block;
	height: auto;
	text-align: left;
	padding: 0;
}
.main-navigation li a {
	display: block;
	color: #FFFFFF;
	width: auto;
	padding: 15px 0;
	line-height: 16px;
	border: none;
}
.main-navigation li a:hover {
	color: #ff6a3c;
	padding-left: 1rem;
}
.main-navigation li.current > a {
	background: none;
	color: #ff6a3c;
}

/**
 * responsive:
 * header styles
 * --------------------------------------------------------------- 
 */
@media only screen and (max-width:1024px) {
	header .top-bar {
		left: 60px;
	}
}
@media only screen and (max-width:768px) {
	header .top-bar {
		left: 50px;
	}
}
@media only screen and (max-width:600px) {
	header .top-bar {
		left: 35px;
	}
}
@media only screen and (max-width:400px) {
	header .top-bar {
		left: 25px;
	}
}


/** 
 * ===================================================================
 * 10. intro - (_layout.scss) 
 *
 * ------------------------------------------------------------------- 
 */
#intro {
	background: #151515 url(../images/newbg.gif) no-repeat center bottom;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	background-attachment: fixed;
	width: 100%;
	height: 100%;
	min-height: 720px;
	display: table;
	position: relative;
	text-align: center;
}
.intro-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #111111;
	opacity: .85;
}

.intro-content {
	display: table-cell;
	vertical-align: middle;
	text-align: center;
	-webkit-transform: translateY(-2.1rem);
	-ms-transform: translateY(-2.1rem);
	transform: translateY(-2.1rem);
}
.intro-content h1 {
	color: #FFFFFF;
	font-family: "poppins-medium", sans-serif;
	font-size: 8.4rem;
	line-height: 1.071;
	max-width: 900px;
	margin-top: 0;
	margin-bottom: .6rem;
	margin-left: auto;
	margin-right: auto;
	text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.intro-content h5 {
	color: #ff6a3c;
	font-family: "poppins-bold", sans-serif;
	font-size: 2.3rem;
	line-height: 1.565;
	margin-bottom: 0;
	text-transform: uppercase;
	letter-spacing: .3rem;
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
.intro-content .intro-position {
	font-family: "lora-regular", serif;
	font-size: 1.7rem;
	line-height: 2.4rem;
	text-transform: uppercase;
	letter-spacing: .2rem;
	color: #FFFFFF;
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
.intro-content .intro-position span {
	display: inline-block;
}
.intro-content .intro-position span::after {
	content: "|";
	text-align: center;
	display: inline-block;
	padding: 0 8px 0 14px;
	color: rgba(255, 255, 255, 0.3);
}
.intro-content .intro-position span:first-child::before {
	content: "|";
	text-align: center;
	display: inline-block;
	padding: 0 14px 0 8px;
	color: rgba(255, 255, 255, 0.3);
}
.intro-content .button {
	color: #FFFFFF !important;
	border-color: rgba(255, 255, 255, 0.3);
	height: 6rem !important;
	line-height: 5.4rem !important;
	padding: 0 3.5rem 0 3rem !important;
	margin-top: .6rem;
	font-size: 1.3rem;
	text-transform: uppercase;
	letter-spacing: .25rem;
}
.intro-content .button:hover, .intro-content .button:focus {
	border-color: #ff6a3c;
}
.intro-content .button::after {
	display: inline-block;
	content: "\f107";
	font-family: fontAwesome;
	font-size: 1.6rem;
	line-height: inherit;
	text-align: center;
	position: relative;
	left: 1.2rem;
}

.intro-social {
	display: block;
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 7.2rem;
	font-size: 3.3rem;
	margin: 0;
	padding: 0;
}
.intro-social li {
	display: inline-block;
	margin: 0 20px;
	padding: 0;
}
.intro-social li a, .intro-social li a:visited {
	color: #FFFFFF;
}
.intro-social li a:hover, .intro-social li a:focus {
	color: #ff6a3c;
}

/**
 * responsive:
 * Intro
 * --------------------------------------------------------------- 
 */
@media only screen and (max-width:1024px) {
	.intro-content h1 {
		font-size: 7.6rem;
	}
	.intro-social {
		font-size: 3rem;
	}
	.intro-social li {
		margin: 0 15px;
	}
}
@media only screen and (max-width:768px) {
	#intro {
		min-height: 660px;
	}
	.intro-content h1 {
		font-size: 5.2rem;
	}
	.intro-content h5 {
		font-size: 1.8rem;
	}
	.intro-content .intro-position {
		font-size: 1.3rem;
	}
	.intro-social {
		font-size: 2.5rem;
	}
	.intro-social li {
		margin: 0 10px;
	}
}
@media only screen and (max-width:600px) {
	#intro {
		min-height: 600px;
	}
	.intro-content h1 {
		font-size: 4.6rem;
		margin-bottom: .6rem;
	}
	.intro-content h5 {
		font-size: 1.5rem;
		margin-bottom: .3rem;
		letter-spacing: .2rem;
	}
	.intro-content .intro-position {
		font-size: 1.2rem;
	}
	.intro-content .intro-position span {
		padding: 0 .6rem;
	}
	.intro-content .intro-position span::before, .intro-content .intro-position span::after {
		display: none !important;
	}
	.intro-social {
		font-size: 2.4rem;
	}
}


/** 
 * ===================================================================
 * 11. about - (_layout.scss)
 *
 * ------------------------------------------------------------------- 
 */
#about {
	background: #FFFFFF;
	padding-top: 12rem;
	padding-bottom: 15rem;
}
#about .section-intro {
	margin-bottom: 3rem;
}

.intro-info {
	margin-top: 4.2rem;
	margin-right: -30px;
	margin-left: -30px;
}
.intro-info img {
	height: 9rem;
	width: 9rem;
	border-radius: 50%;
	margin: .9rem 0 0 0;
	float: left;
}
.intro-info .lead {
	text-align: left;
	padding-left: 13rem;
}

.about-content {
	position: relative;
	text-align: left;
	max-width: 850px;
	margin-bottom: 3.6rem;
}
.about-content h3 {
	font-family: "poppins-bold", sans-serif;
	font-size: 1.8rem;
	text-transform: uppercase;
	letter-spacing: .25rem;
}
.about-content .info-list {
	list-style: none;
	margin-left: 0;
}
.about-content .info-list li {
	padding: 0 0 1.5rem 0;
	margin-bottom: .6rem;
}
.about-content .info-list li strong {
	font-family: "poppins-bold", sans-serif;
	color: #313131;
	text-transform: uppercase;
	letter-spacing: .2rem;
	font-size: 1.5rem;
	line-height: 3rem;
}
.about-content .info-list li span {
	display: block;
	font-family: "poppins-regular", sans-serif;
	color: #888888;
	font-size: 1.5rem;
	line-height: 1;
}
.about-content .skill-bars {
	margin-top: 6rem;
}

.button-section {
	text-align: center;
}
.button-section .button {
	width: 250px;
}
.button-section [class*="col-"] .button:first-child {
	margin-right: 4rem;
}

/**
 * responsive:
 * about
 * ------------------------------------------------------------------- 
 */
@media only screen and (max-width:1024px) {
	.intro-info {
		margin-right: 0;
		margin-left: 0;
	}
}
@media only screen and (max-width:768px) {
	.intro-info img {
		height: 7.8rem;
		width: 7.8rem;
	}
	.intro-info .lead {
		padding-left: 11rem;
	}
	.about-content h3 {
		text-align: center;
	}
	.about-content .info-list, .about-content .skill-bars {
		margin-bottom: 4.2rem;
	}
	.button-section .button {
		width: 100%;
		margin-bottom: 3rem;
	}
	.button-section [class*="col-"] .button:first-child {
		margin-right: 0;
	}
}
@media only screen and (max-width:600px) {
	.intro-info {
		text-align: center;
		margin-top: 3rem;
	}
	.intro-info img {
		height: 6.6rem;
		width: 6.6rem;
		float: none;
		display: inline-block;
	}
	.intro-info .lead {
		padding-left: 0;
		text-align: center;
	}
}

/** 
 * ===================================================================
 * 12. resume - (_layout.scss)
 *
 * ------------------------------------------------------------------- 
 */
#resume {
	padding-top: 12rem;
	padding-bottom: 12rem;
}

#resume .resume-header {
	text-align: center;
}
#resume .resume-header h2 {
	color: #ff6a3c;
}

#resume .resume-timeline {
	max-width: 980px;
}
#resume .timeline-wrap {
	position: relative;
	margin-top: 1.5rem;
	margin-bottom: 6rem;
}
#resume .timeline-wrap::before {
	content: "";
	display: block;
	width: 1px;
	height: 100%;
	background: rgba(0, 0, 0, 0.1);
	position: absolute;
	left: 35%;
	top: 0;
}
#resume .timeline-block {
	position: relative;
	padding-top: 1.5rem;
}
#resume .timeline-ico {
	height: 4.8rem;
	width: 4.8rem;
	line-height: 4.8rem;
	background: #313131;
	border-radius: 50%;
	text-align: center;
	color: #FFFFFF;
	position: absolute;
	left: 35%;
	top: .9rem;
	margin-left: -2.4rem;
}
#resume .timeline-ico i {
	position: relative;
	left: .05rem;
	top: .2rem;
}

#resume .timeline-header {
	float: left;
	width: 35%;
	padding-right: 90px;
	text-align: right;
}
#resume .timeline-header h3 {
	margin-bottom: 0;
}
#resume .timeline-header p {
	font-family: "poppins-regular", sans-serif;
	font-size: 1.6rem;
	color: #888888;
}
#resume .timeline-content {
	margin-left: 35%;
	padding-left: 60px;
}
#resume .timeline-content h4 {
	position: relative;
	padding-bottom: 1.8rem;
}
#resume .timeline-content h4::after {
	content: "";
	display: block;
	height: 3px;
	width: 50px;
	background: rgba(0, 0, 0, 0.2);
	position: absolute;
	left: 0;
	bottom: 0;
}

/**
 * responsive:
 * resume
 * ------------------------------------------------------------------- 
 */
@media only screen and (max-width:1024px) {
	#resume .timeline-header {
		padding-right: 50px;
	}
	#resume .timeline-header h3 {
		font-size: 1.8rem;
	}
	#resume .timeline-header p {
		font-size: 1.4rem;
	}
	#resume .timeline-content {
		padding-left: 50px;
	}
}
@media only screen and (max-width:768px) {
	#resume .timeline-wrap::before {
		left: 2.4rem;
	}
	#resume .timeline-ico {
		left: 2.4rem;
	}
	#resume .timeline-header {
		float: none;
		width: auto;
		padding-right: 15px;
		text-align: left;
	}
	#resume .timeline-header h3 {
		font-size: 2rem;
	}
	#resume .timeline-header p {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
	}
	#resume .timeline-content {
		margin: 0;
	}
	#resume .timeline-content h4 {
		padding-bottom: 0;
		padding-top: 2.1rem;
		margin-bottom: .6rem;
		font-size: 1.7rem;
	}
	#resume .timeline-content h4::after {
		bottom: auto;
		top: 0;
	}
	#resume .timeline-header, #resume .timeline-content {
		padding-left: 7rem;
	}
}
@media only screen and (max-width:480px) {
	#resume .resume-header h2 {
		font-size: 2.2rem;
	}
	#resume .timeline-wrap::before {
		left: 1.8rem;
	}
	#resume .timeline-ico {
		height: 3.6rem;
		width: 3.6rem;
		line-height: 3.6rem;
		left: 1.8rem;
		margin-left: -1.8rem;
		font-size: 1.5rem;
	}
	#resume .timeline-header, #resume .timeline-content {
		padding-left: 5.5rem;
	}
}


/** 
 * ===================================================================
 * 13. portfolio - (_layout.scss)
 *
 * ------------------------------------------------------------------- 
 */
#portfolio {
	background: #FFFFFF;
	padding-top: 12rem;
	padding-bottom: 12rem;
}
#portfolio .folio-item {
	padding: 0;
	position: relative;
	overflow: hidden;
}
#portfolio .folio-item img {
	vertical-align: middle;
	-moz-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	-webkit-transition: all 0.5s ease-in-out;
	-ms-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
}

#portfolio .overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: transparent;
	-moz-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	-webkit-transition: all 0.5s ease-in-out;
	-ms-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
}

#portfolio .folio-item-table {
	display: table;
	width: 100%;
	height: 100%;
}
#portfolio .folio-item-cell {
	display: table-cell;
	vertical-align: middle;
	text-align: center;
	-moz-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	-webkit-transition: all 0.5s ease-in-out;
	-ms-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
	position: relative;
	left: -100%;
}

#portfolio .folio-title {
	color: #FFFFFF;
	font-size: 3.3rem;
	padding: 0 3rem;
	margin-bottom: 0;
}
#portfolio .folio-types {
	margin: 0;
	padding: 0;
	text-transform: uppercase;
	font-family: "poppins-regular", sans-serif;
	font-size: 1.2rem;
	letter-spacing: .1rem;
	color: rgba(255, 255, 255, 0.6);
}
#portfolio .folio-item:hover .overlay {
	background: rgba(0, 0, 0, 0.8);
}
#portfolio .folio-item:hover .folio-item-cell {
	left: 0;
}
#portfolio .folio-item:hover img {
	-webkit-transform: scale(1.05);
	-ms-transform: scale(1.05);
	transform: scale(1.05);
}

/**
 * responsive:
 * portfolio
 * ------------------------------------------------------------------- 
 */
@media only screen and (max-width:1024px) {
	#portfolio .folio-title {
		font-size: 3.1rem;
	}
}
@media only screen and (max-width:768px) {
	#portfolio .folio-title {
		font-size: 2.5rem;
	}
}
@media only screen and (max-width:400px) {
	#portfolio .folio-title {
		font-size: 2.2rem;
	}
}

/**
 * Popup Modal - (_layout.scss)
 * ------------------------------------------------------------------
 */
.popup-modal {
	max-width: 550px;
	background: #FFFFFF;
	position: relative;
	margin: 0 auto;
}
.popup-modal .media {
	position: relative;
}
.popup-modal img {
	vertical-align: bottom;
}
.popup-modal .description-box {
	padding: 1.8rem 3.6rem 3rem;
}
.popup-modal .description-box h4 {
	font-family: "poppins-bold", sans-serif;
	font-size: 1.5rem;
	line-height: 2.4rem;
	margin-bottom: .6rem;
}
.popup-modal .description-box p {
	font-family: "poppins-regular", sans-serif;
	font-size: 1.4rem;
	line-height: 2.4rem;
	margin-bottom: 12px;
}
.popup-modal .categories {
	font-family: "poppins-bold", sans-serif;
	font-size: 1.1rem;
	line-height: 1.8rem;
	text-transform: uppercase;
	letter-spacing: .1rem;
	display: block;
	text-align: left;
	color: rgba(0, 0, 0, 0.5);
}
.popup-modal .link-box {
	width: 100%;
	overflow: hidden;
	background: #000000;
}
.popup-modal .link-box a {
	font-family: "poppins-bold", sans-serif;
	font-size: 1.2rem;
	line-height: 6rem;
	color: #FFFFFF;
	text-transform: uppercase;
	letter-spacing: 3px;
	cursor: pointer;
	display: block;
	text-align: center;
	float: left;
	width: 50%;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}
.popup-modal .link-box a:first-child {
	border-right: 1px solid rgba(200, 200, 200, 0.1);
}
.popup-modal .link-box a:hover {
	background: #ff6a3c;
	border: none;
}
@media only screen and (max-width:600px) {
	.popup-modal {
		width: auto;
		margin: 0 20px;
	}
}

/**
 * transition effect for modal popup - (_layout.scss)
 * ------------------------------------------------------------------ 
 */

/* overlay at start */
.mfp-fade.mfp-bg {
	opacity: 0;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}

/* overlay animate in */
.mfp-fade.mfp-bg.mfp-ready {
	opacity: .9;
}

/* overlay animate out */
.mfp-fade.mfp-bg.mfp-removing {
	opacity: 0;
}

/* content at start */
.mfp-fade.mfp-wrap .mfp-content {
	opacity: 0;
	-webkit-transform: translateY(-100%);
	-ms-transform: translateY(-100%);
	transform: translateY(-100%);
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}

/* content animate in */
.mfp-fade.mfp-wrap.mfp-ready .mfp-content {
	opacity: 1;
	-webkit-transform: translateY(0);
	-ms-transform: translateY(0);
	transform: translateY(0);
}

/* content animate out */
.mfp-fade.mfp-wrap.mfp-removing .mfp-content {
	opacity: 0;
	-webkit-transform: translateY(-100%);
	-ms-transform: translateY(-100%);
	transform: translateY(-100%);
}

/** 
 * ===================================================================
 * 14. call-to-action section - (_layout.scss)
 *
 * ------------------------------------------------------------------- 
 */
#cta {
	padding-top: 10.2rem;
	padding-bottom: 9rem;
	text-align: center;
}
#cta p.lead {
	color: #6e6e6e;
}
.cta-content {
	max-width: 640px;
}
.cta-thumb {
	display: inline-block;
	margin-bottom: 1.2rem;
}
.cta-thumb img {
	height: 7.8rem;
	width: 7.8rem;
	border-radius: 50%;
}

/**
 * section ads - (_layout.scss)
 * ------------------------------------------------------------------- 
 */
.section-ads h2 {
	position: relative;
	padding-bottom: 2.1rem;
}
.section-ads h2::after {
	content: "";
	display: block;
	height: 3px;
	width: 80px;
	background: rgba(0, 0, 0, 0.2);
	position: absolute;
	left: 50%;
	bottom: 0;
	margin-left: -40px;
}
.section-ads h2 a, .section-ads h2 a:visited {
	color: #313131;
}
.section-ads span {
	color: #3F0D39;
}

/**
 * responsive:
 * cta
 * -------------------------------------------------------------------
 */
@media only screen and (max-width:650px) {
	.cta-content {
		max-width: 650px;
	}
	.cta-content h2 {
		font-size: 2.4rem;
	}
}


/** 
 * ===================================================================
 * 15. services - (_layout.scss)
 *
 * ------------------------------------------------------------------- 
 */
#services {
	background: #313131 url(../images/bg.jpg) no-repeat center;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	padding-top: 12rem;
	padding-bottom: 12rem;
	color: white;
	position: relative;
}
#services .overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #151515;
	opacity: .9;
}

#services .section-intro {
	margin-bottom: 1.8rem;
}

#services .section-intro h1 {
	color: white;
}
#services .section-intro h5 {
	color: #ff6a3c;
}
#services .section-intro p {
	color: rgba(255, 255, 255, 0.7);
}
.services-content {
	max-width: 1200px;
}
.services-list {
	margin-top: 1.2rem;
	text-align: center;
}
.services-list .service {
	margin-bottom: 1.2rem;
	padding: 0 30px;
}
.services-list .icon {
	display: inline-block;
	margin-bottom: 2.1rem;
}
.services-list .icon i {
	font-size: 5.4rem;
	color: #ff6a3c;
}
.services-list h3 {
	color: #FFFFFF;
}
.services-list .desc {
	color: rgba(255, 255, 255, 0.6);
}

/* pagination */
.owl-pagination {
	text-align: center;
	width: 100%;
	margin: .6rem 0 0;
}
.owl-theme .owl-controls .owl-page {
	display: inline-block;
}
.owl-theme .owl-controls .owl-page span {
	display: block;
	width: 1.2rem;
	height: 1.2rem;
	margin: 1.2rem .8rem 0 .8rem;
	border-radius: 50%;
	display: inline-block;
	background: #FFFFFF;
}
.owl-theme .owl-controls .owl-page.active span {
	background: #ff6a3c;
}


/** 
 * ===================================================================
 * 16. stats - (_layout.scss)
 *
 * ------------------------------------------------------------------- 
 */
 #stats {
    background: #ff6a3c;
    padding-top: 7.2rem;
    padding-bottom: 6rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}


#stats .row {
    max-width: 1440px;
    display: flex;
    justify-content: center; /* Center the content inside .row */
}

#stats .stat {
    border-left: 1px solid rgba(255, 255, 255, 0.12);
    min-height: 17.4rem;
}

#stats .stat:first-child {
    border: none;
}

#stats .icon-part i {
    font-size: 4.8rem;
    color: #000000;
	justify-content: center;
}

#stats .stat-count {
    color: #FFFFFF;
    font-size: 3.6rem;
    margin-top: 1.2rem;
    margin-bottom: 0;
    font-family: "poppins-medium", sans-serif;
    color: white;
	justify-content: center;
}

#stats .stat-title {
    color: rgba(6, 6, 6, 0.5);
	justify-content: center;
}


/**
 * responsive:
 * stats
 * -------------------------------------------------------------------
 */
@media only screen and (max-width:1024px) {
	#stats .stat:nth-child(n) {
		border-left: 1px solid rgba(255, 255, 255, 0.12);
		padding-bottom: 1.5rem;
	}
	#stats .stat:nth-child(3n+1) {
		border: none;
	}
}
@media only screen and (max-width:768px) {
	#stats .stat:nth-child(n) {
		border-left: 1px solid rgba(255, 255, 255, 0.12);
	}
	#stats .stat:nth-child(2n+1) {
		border: none;
	}
}
@media only screen and (max-width:600px) {
	#stats .stat:nth-child(n) {
		border: none;
	}
}


/** 
 * ===================================================================
 * 17. contact - (_layout.scss)
 *
 * ------------------------------------------------------------------- 
 */
#contact {
	background: #151515;
	padding-top: 12rem;
	padding-bottom: 7.2rem;
}
#contact .section-intro h1 {
	color: white;
}
#contact .section-intro h5 {
	color: #ff6a3c;
}
#contact .section-intro p {
	color: rgba(255, 255, 255, 0.7);
}

/* contact form */
.contact-form {
	max-width: 740px;
}

.contact-form ::-webkit-input-placeholder {
	color: rgba(255, 255, 255, 0.3);
}
.contact-form :-moz-placeholder {
	color: rgba(255, 255, 255, 0.3);  /* Firefox 18- */
}
.contact-form ::-moz-placeholder {
	color: rgba(255, 255, 255, 0.3);  /* Firefox 19+ */
}
.contact-form :-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.3);
}
.contact-form .placeholder {
	color: rgba(255, 255, 255, 0.3) !important;
}

#contact form {
	margin-top: 0;
	margin-bottom: 3rem;
}
#contact form .form-field {
	position: relative;
}
#contact form .form-field:before, #contact form .form-field:after {
	content: "";
	display: table;
}
#contact form .form-field:after {
	clear: both;
}
#contact form .form-field label {
	font-family: "poppins-bold", sans-serif;
	font-size: 1.1rem;
	line-height: 2.4rem;
	position: absolute;
	bottom: -1.2rem;
	right: .6rem;
	text-transform: uppercase;
	letter-spacing: .1rem;
	padding: 0 2rem;
	margin: 0;
	color: #FFFFFF;
	background: #ff6a3c;
}
#contact form .form-field label::after {
	position: absolute;
	left: -5px;
	top: 50%;
	margin-top: -6px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: 5px solid #ff6a3c;
	content: "";
}
#contact input[type="text"],
#contact input[type="password"],
#contact input[type="email"],
#contact textarea {
	width: 100%;
	color: rgba(255, 255, 255, 0.7);
	margin-bottom: 0;
	border: none;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
#contact input[type="text"],
#contact input[type="password"],
#contact input[type="email"] {
	height: 6.6rem;
	padding: 1.8rem 2rem;
}
#contact input[type="text"]:focus,
#contact input[type="password"]:focus,
#contact input[type="email"]:focus {
	border-color: #ff6a3c;
	color: #FFFFFF;
}
#contact textarea {
	min-height: 20rem;
	padding: 1.8rem 2rem;
}
#contact textarea:focus {
	border-color: #ff6a3c;
	color: #FFFFFF;
}
#contact button.submitform {
	font-size: 1.5rem;
	display: block;
	letter-spacing: .2rem;
	height: 6.6rem;
	line-height: 6.6rem;
	padding: 0 3rem;
	margin-top: 4.8rem;
	width: 100%;
	background: #ff6a3c;
	color: #FFFFFF;
}
#contact button.submitform:hover, #contact button.submitform:focus {
	background: #ff6a3c;
}
#message-warning, #message-success {
	display: none;
	background: #0d0d0d;
	border-radius: 3px;
	padding: 3rem;
	margin-bottom: 3.6rem;
	width: 100%;
}
#message-warning {
	color: #fa0003;
}
#message-success {
	color: #ff6a3c;
}
#message-warning i, #message-success i {
	margin-right: 10px;
}

/* form loader */
#submit-loader {
	display: none;
	position: relative;
	left: 0;
	top: 1.8rem;
	width: 100%;
	text-align: center;
}
#submit-loader .text-loader {
	display: none;
	font-family: "poppins-bold", sans-serif;
	color: #FFFFFF;
	letter-spacing: .3rem;
	text-transform: uppercase;
}
.oldie #submit-loader .s-loader {
	display: none;
}
.oldie #submit-loader .text-loader {
	display: block;
}
.contact-info {
	margin: 4.8rem auto 0;
	font-family: "poppins-regular", sans-serif;
	font-size: 1.5rem;
	text-align: center;
}
.contact-info .collapse {
	padding: 0;
}
.contact-info .icon {
	margin-bottom: 2.1rem;
}
.contact-info .icon i {
	font-size: 4.2rem;
	color: #FFFFFF;
}
.contact-info h5 {
	color: #ff6a3c;
}

/**
 * loader animation - (_layout.scss)
 * --------------------------------------------------------------- 
 */
.s-loader {
	margin: 1.2rem auto 3rem;
	width: 70px;
	text-align: center;
	-webkit-transform: translateX(0.45rem);
	-ms-transform: translateX(0.45rem);
	transform: translateX(0.45rem);
}
.s-loader > div {
	width: 1rem;
	height: 1rem;
	background-color: #FFFFFF;
	border-radius: 100%;
	display: inline-block;
	margin-right: .9rem;
	-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}
.s-loader .bounce1 {
	-webkit-animation-delay: -0.32s;
	animation-delay: -0.32s;
}
.s-loader .bounce2 {
	-webkit-animation-delay: -0.16s;
	animation-delay: -0.16s;
}
@-webkit-keyframes sk-bouncedelay {
	0%, 80%, 100% {
		-webkit-transform: scale(0);
		-ms-transform: scale(0);
		transform: scale(0);
	}
	40% {
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
	}
}
@keyframes sk-bouncedelay {
	0%, 80%, 100% {
		-webkit-transform: scale(0);
		-ms-transform: scale(0);
		transform: scale(0);
	}
	40% {
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
	}
}


/** 
 * ===================================================================
 * 18. footer - (_layout.scss)
 *
 * ------------------------------------------------------------------- 
 */
footer {
	padding-bottom: 3rem;
	font-size: 1.4rem;
	font-family: "poppins-regular", sans-serif;
}
footer a, footer a:visited {
	color: #FFFFFF;
}
footer a:hover, footer a:focus {
	color: #ff6a3c;
}
footer .row {
	max-width: 900px;
}
footer .social {
	text-align: right;
}
footer .footer-social {
	display: inline-block;
	font-size: 2.1rem;
	margin: 0;
	padding: 0;
	position: relative;
	top: -.3rem;
}
footer .footer-social li {
	display: inline-block;
	margin: 0 12px;
	padding: 0;
}
footer .footer-social li a {
	color: #FFFFFF;
}
footer .copyright span {
	display: inline-block;
}
footer .copyright span::after {
	content: "|";
	display: inline-block;
	padding: 0 1rem 0 1.2rem;
	color: rgba(255, 255, 255, 0.1);
}
footer .copyright span:last-child::after {
	display: none;
}

/**
 * responsive:
 * footer
 * -------------------------------------------------------------------
 */
@media only screen and (max-width:768px) {
	footer {
		text-align: center;
	}
	footer .social {
		display: block;
		width: 100%;
		text-align: center;
		margin-bottom: 1.5rem;
	}
	footer .copyright span {
		display: block;
	}
	footer .copyright span::after {
		display: none;
	}
}

/**
 * go to top - (_layout.scss)
 * ------------------------------------------------------------------- 
 */
#go-top {
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 600;
	display: none;
}
#go-top a {
	text-decoration: none;
	border: 0 none;
	display: block;
	height: 6.6rem;
	width: 6rem;
	line-height: 6.6rem;
	text-align: center;
	background: #ff6a3c;
	color: #FFFFFF;
	text-align: center;
	text-transform: uppercase;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}
#go-top a i {
	font-size: 1.6rem;
	line-height: inherit;
}
#go-top a:hover {
	background: #000000;
}

/*# sourceMappingURL=main.css.map */
