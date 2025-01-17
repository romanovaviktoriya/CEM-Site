import {
    jsx,
    jsxFrag,
    setAction,
    setValue,
    makeDOM,
    getVariable,
    getStorage,
    getValue
} from '@betarost/cemjs';
import svg from "@assets/svg/index.js";
import { QuestionItem } from '@component/element/QuestionItem.js';
import { Select } from '../element/Select.js';







const BlockQuestions = function ({lang, questions}) {
    // console.log("BlockQuestions", questions);

    let options = {
        questions: [
            { value: lang.select.showAllQuestions },
            { value: lang.select.openQuestions },
            { value: lang.select.closeQuestions },
            { value: lang.select.bestQuestions }
        ],
        date: [
            { value: lang.select.byDate },
            { value: lang.select.byViews },
            { value: lang.select.byAnswers },
        ]
    }
    let sortSelects = {
        selectBlockQuestions1: options.questions[0].value,
        selectBlockQuestions2: options.date[0].value,
    }


    const changeSelect = (e, type, value,) => {
        e.stopPropagation()
        let show = getValue(ID, "showObject")[type]
        if (e.target.localName === "li") {
            let tmp = { ...sortSelects, [type]: value };
            sortSelects = { ...tmp };
        }
        setValue(ID, "showObject", { [type]: !show });
    }

    const ID = "mainBlock";

    return (

        <div class="c-questions">
            <div class="c-questions__header">
                {/* <p class="c-questions__title info-text-questions"></p> */}
                <div></div>
                <div class="c-questions__searchblock c-search">
                    <div class="c-search__container">
                        <div class="c-search__wrapper">
                            <img class="c-search__icon" src={svg.search_icon} />
                            <input class="c-search__input" type="text" placeholder={`${lang.placeholder.question}`} autocomplete="disabled" />
                            <img class="c-search__icon c-search__icon--filter" src={svg.filter} />

                        </div>
                        <div style="display: none;" class="questions_search">
                            <div class="question_search_half_empty">
                                {lang.text.contInput}
                            </div>
                            <div style="display: none;" class="question_search_help">
                            </div>
                        </div>
                    </div>
                    <div data-needauth="true" data-action="askQuestionModal" class="mobile_search_container">
                        <div class="search-button" style="width:238px;">
                            {lang.button.giveQuestion}
                        </div>
                    </div>


                </div>
                <div class="c-questions__filter questions_filter">

                    {/* <Select options={options.questions} changeSelect={changeSelect} type = "selectBlockQuestions1" selectObject = {sortSelects}  ID = {ID} selectTitle = "Сортировать" />
                    <Select options={options.date} changeSelect={changeSelect} type = "selectBlockQuestions2"  selectObject = {sortSelects}  ID = {ID} selectTitle = "Сортировать" /> */}
                    {/* <div class="profit_calculator_inputs_container">
                        <span>{lang.span.sort}</span>
                        <select class="justselect" id="statusQuestions">
                            <option selected="selected" value="all">{lang.select.showAllQuestions}</option>
                            <option value="open">{lang.select.openQuestions}</option>
                            <option value="closed">{lang.select.closeQuestions}</option>
                            <option value="best">{lang.select.bestQuestions}</option>
                        </select>
                    </div>
                    <div class="profit_calculator_inputs_container">
                        <span>{lang.span.sort}</span>
                        <select class="justselect" id="sortQuestions">
                            <option selected="selected" value="date">{lang.select.byDate}</option>
                            <option value="views">{lang.select.byViews}</option>
                            <option value="answers">{lang.select.byAnswers}</option>
                        </select>
                        <img data-sort="DESC" class="filter_sort_toggler" data-action="toggleFilterSort" src={svg.filter_arrow_bottom}/>
                    </div> */}
                    <div data-language="{{lang.lang}}" data-language_code="{{lang.code}}" class="questions_filter_language" data-action="questionsFilterLanguage">
                        {lang.lang}
                    </div>
                </div>
                <h4>{lang.h.lastQuestions}</h4>
            </div>     
            <div class="c-questions__list questions-blocks">
                {
                    questions.map((question) =>{
                        // console.log("item=",question);
                        return (
                            <QuestionItem lang={lang} question={question} />
                        )
                    })
                }
            </div>
            <div class="c-questions__footer">
                <a class="c-button c-button--gray" href="question/">
                    <span class="c-button__wrapper">{lang.button.allQuestions}</span>
                </a>
            </div>
        </div>
    )
}

export { BlockQuestions }