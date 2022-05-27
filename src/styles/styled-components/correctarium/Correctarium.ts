import styled from "styled-components";

export const Form = styled.form`
	color: #1b2235;
	padding: 80px 60px 0;
	display: flex;
	justify-content: space-between;
	width: 1160px;
	margin: 0 auto;
`;

export const Left = styled.div`
	width: 850px;
`;

export const H1 = styled.h1`
	font-size: 30px;
	font-weight: 500;
	line-height: 1.47;
	margin-bottom: 70px;
`;
export const List = styled.ul<{ isOpen: boolean }>`
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	width: 345px;
	border: 1px solid #eee;
	border-radius: 8px;
	background-color: #fff;
	margin-top: 8px;
	color: #1b2235;
	padding: 20px 0;
	flex-direction: column;
	z-index: 1;
	position: relative;
	& li {
		line-height: 2.29;
		cursor: pointer;
		box-sizing: border-box;
		padding: 0 20px;
	}
	& li:hover {
		background: #eee;
	}
`;

export const Textarea = styled.textarea`
	display: block;
	width: 100%;
	max-width: 660px;
	min-height: 100px;
	padding: 20px 30px;
	margin-bottom: 25px;
	border-radius: 16px;
	border: 1px solid #eee;
	outline: none;
	resize: none;
	line-height: 1.15;
	font-size: 16px;
	font-family: 'Montserrat', sans-serif;
	&::placeholder {
		color: #a0a1a4;
		font-weight: 500;
		font-size: 14px;
		line-height: 1.57;
		font-stretch: normal;
		font-style: normal;
		letter-spacing: -0.05px;
		font-family: 'Montserrat', sans-serif;
	}
    &:focus {
      border-color: #0068e4;
  }
`;

export const Select = styled.div<{ choice: string }>`
    width: 343px;
	height: 60px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: ${({ choice }) => (choice === 'Послуга' || choice === 'Мова' ? '#a0a1a4' : 'black')};
	cursor: pointer;
	border-radius: 8px;
	border: 1px solid #eee;
	margin-bottom: 30px;
    position: relative;
	&:focus {
		border-color: #0068e4;
	}
   &:before {
     content: "${({ choice }) =>
    (choice === 'Українська' || choice === 'Російська' || choice === 'Англійська' || choice === 'Англійська носій') ?
        'Мова' : (choice === 'Редагування' || choice === 'Переклад') && 'Послуга'}";
     position: absolute;
     left: 22px;
     top: -9px;
     color: #a0a1a4;
     background-color: #fff;
     font-family: 'Montserrat', sans-serif;
     font-size: 12px;
     font-weight: 400;
     font-stretch: normal;
     font-style: normal;
     line-height: normal;
     letter-spacing: -.04px;
   }
`;

export const SelectInner = styled.div<{isOpen: boolean}>`
  padding: 19px 20px;
  display: flex;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    background: url('/select-arrow.svg');
    transform: ${({ isOpen }) => (isOpen && 'rotate(180deg)' )};
    background-size: contain;
    position: absolute;
    width: 8px;
    height: 8px;
    right: 16px;
    top: 26px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;


export const Button = styled.button<{ selectedLanguage: string, inputText: string }>`
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.05px;
	margin-top: 54px;
	padding: 18px 20px;
	width: 260px;
	border-radius: 8px;
	background-color: #252e47;
	color: ${({ selectedLanguage, inputText }) => (selectedLanguage !== 'Мова' && inputText.length !== 0 ? 'white' : 'hsla(0, 0%, 100%, 0.3)')};
	outline: none;
	border: none;
	box-shadow: 0 7px 14px 0 rgb(0 0 0 / 16%);
	cursor: ${({ selectedLanguage, inputText}) => (selectedLanguage === 'Мова' || inputText.length === 0 ? 'auto' : 'pointer')};
`;

export const Price = styled.div`
	color: #0068e4;
	padding-top: 108px;
	text-align: right;
`;

export const PriceSpan = styled.span`
	margin-left: auto;
	font-size: 60px;
	font-weight: 100;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.37;
	letter-spacing: -0.19px;
	text-align: right;
	color: #0068e4;
`;

export const DeadlineDate = styled.div`
  color: #1b2235;
  width: 100%;
  height: 24px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  margin-bottom: 30px
`;

export const CloseButton = styled.div`
	position: relative;
	width: 36px;
	height: 36px;
	float: right;
	cursor: pointer;
	&::before {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		content: '';
		background: #1b2235;
		width: 32px;
		height: 4px;
		transform: rotate(-45deg);
		margin: auto;
	}
	&::after {
		position: absolute;
		content: '';
		background: #1b2235;
		width: 32px;
		height: 4px;
		transform: rotate(45deg);
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
`;