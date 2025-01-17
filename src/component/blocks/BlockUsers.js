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
import images from "@assets/images/index.js";

import { UserItem } from '@component/element/UserItem.js';

const BlockUsers = function ({ lang, users }) {
    // console.log("BlockUsers", users);

    return (
        <div class="top_professionals">
            <h2>{lang.h.top_users}</h2>
            <div data-type="main_page_users" class="friends_block_container">
                <div class="friends_search">
                    <div class="friends_search_top">
                        <input
                            autocomplete="off"
                            type="text"
                            data-keyup="friendsSearchType"
                            placeholder={lang.placeholder.findFriends}
                        />
                        <div class="filter_summoner" data-action="filterSummoner">
                            <img src={svg.filter} />
                            <span>{lang.span.filter}</span>
                        </div>
                    </div>
                    <div style="display: none" class="friends_search_filter">
                        <div class="filter_block_container">
                            <div data-language="all" data-language_code="all" class="friends_filter_language" data-action="friendsLanguageFilter" data-name="{{lang.text.language}}">
                                {lang.text.language}
                            </div>
                            <img style="display: none;" class="refresh_language" data-action="refreshLanguage" src="/assets/svg/refresh_filter.svg" />
                        </div>
                        <div class="filter_block_container">
                            <div data-country="all" data-country_code="all" class="friends_filter_country" data-action="friendsCountryFilter" data-name="{{lang.text.country}}">
                                {lang.text.country}
                            </div>
                            <img style="display: none;" class="refresh_country" data-action="refreshCountry" src="/assets/svg/refresh_filter.svg" />
                        </div>
                        <div class="friends_filter_checkboxs">
                            <div class="checkbox" data-action="friendsFilterCheckbox">
                                <input checked="false" class="checkbox__input" type="checkbox" id="common" required="required" />
                                <label class="checkbox__label" for="fast_agree">{lang.h.top_users}</label>
                            </div>
                            <div class="checkbox" data-action="friendsFilterCheckbox">
                                <input checked="true" class="checkbox__input" type="checkbox" id="content-makers" required="required" />
                                <label class="checkbox__label" for="fast_agree">{lang.select.users_contentCreater}</label>
                            </div>
                            <div class="checkbox" data-action="friendsFilterCheckbox">
                                <input checked="true" class="checkbox__input" type="checkbox" id="specialists" required="required" />
                                <label class="checkbox__label" for="fast_agree">{lang.select.users_experts}</label>
                            </div>
                            <div class="checkbox" data-action="friendsFilterCheckbox">
                                <input class="checkbox__input" type="checkbox" id="online" required="required" />
                                <label class="checkbox__label" for="fast_agree">{lang.span.online}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="top_professionals_block">
                    {
                        users.map(function (user) {
                            return (
                                <UserItem lang={lang} user={user} />
                            )
                        })
                    }
                </div>
            </div>
            <a href="users/" class="btn-view-all-a">
                <div class="btn-view-all">
                    <div>{lang.button.allUsers}</div>
                </div>
            </a>
        </div>
    )
}

export { BlockUsers }