import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getTextAreaValue, setSelectedLanguage} from "../../../redux/actions/correctarium";
import {Button, CloseButton, DeadlineDate, Form, H1, Left, List, Price, PriceSpan, Right, Select, SelectInner, Textarea } from '../../../styles/styled-components/correctarium/Correctarium';

const Correctarium = () => {
    const [isOpenServices, setIsOpenServices] = useState(false);
    const [isOpenLanguages, setIsOpenLanguages] = useState(false);
    const [selectedService, setSelectedService] = useState('Послуга');

    const selectedLanguage = useSelector((state: any) => state.correctarium.selectedLanguage);
    const inputText = useSelector((state: any) => state.correctarium.inputText);
    const price = useSelector((state: any) => state.correctarium.price);
    const deadline = useSelector((state: any) => state.correctarium.deadline);
    const dispatch = useDispatch();

    const onLanguageClick = (language: string) => {
        dispatch(setSelectedLanguage(language));
    };

    const onTextAreaChange = (e:any) => {
        dispatch(getTextAreaValue(e.target.value));
    };

    return (
        <Form onClick={() => {
            isOpenServices === true && setIsOpenServices(false);
            isOpenLanguages === true && setIsOpenLanguages(false);
        }}>
            <Left>
                <H1>Замовити переклад або редагування</H1>
                <Select
                    tabIndex={0}
                    choice={selectedService}
                    onClick={() => {
                        setIsOpenServices(!isOpenServices);
                    }}
                >
                    <SelectInner isOpen={isOpenServices}>
                        <div>{selectedService}</div>
                    </SelectInner>
                    <List isOpen={isOpenServices}>
                        <li
                            onClick={() => {
                                setSelectedService('Редагування');
                            }}
                        >
                            Редагування
                        </li>
                        <li
                            onClick={() => {
                                setSelectedService('Переклад');
                            }}
                        >
                            Переклад
                        </li>
                    </List>
                </Select>
                <Textarea value={inputText} placeholder={'Введіть текст'} onChange={onTextAreaChange}/>
                <Select tabIndex={0}
                        choice={selectedLanguage}
                        onClick={() => selectedService === "Послуга" ? setIsOpenLanguages(isOpenLanguages) : setIsOpenLanguages(!isOpenLanguages)}>
                    <SelectInner isOpen={isOpenLanguages}>
                        <div>{selectedLanguage}</div>
                    </SelectInner>
                        <List isOpen={isOpenLanguages}>
                            <li
                                onClick={() => onLanguageClick('Українська')}
                            >
                                Українська
                            </li>
                            <li
                                onClick={() => onLanguageClick('Російська')}
                            >
                                Російська
                            </li>
                            <li
                                onClick={() => onLanguageClick('Англійська')}
                            >
                                Англійська
                            </li>
                            <li
                                onClick={() => onLanguageClick('Англійська носій')}
                            >
                                Англійська носій
                            </li>
                        </List>
                </Select>
            </Left>
            <Right>
                <CloseButton />
                <Price>
                    <PriceSpan>{price}</PriceSpan>грн
                </Price>
                <DeadlineDate>
                    {deadline}
                </DeadlineDate>
                <Button selectedLanguage={selectedLanguage} inputText={inputText}>Замовити</Button>
            </Right>
        </Form>
    );
};

export default Correctarium;
