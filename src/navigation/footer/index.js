import {jsx,jsxFrag,setAction,setValue,makeDOM,getVariable,getStorage,getValue} from '@betarost/cemjs'
import appstore from '@assets/svg/appstore.svg'
import googleplay from '@assets/svg/googleplay.svg'
import telegram from '@assets/svg/telegram-icon.svg'
import youtube from '@assets/svg/youtube_icon.svg'
import twitter from '@assets/svg/twitter-icon.svg'
import discord from '@assets/svg/discord-icon.svg'
import github from '@assets/svg/github-icon2.svg'
import tiktok from '@assets/svg/tiktok-icon.svg'
import { clickCancel,siteLink, changeLang } from '@src/functions.js'


let socialIcon = {
    telegram:false,
    tiktok:false
}

const showSocial = function (e) {
    socialIcon[e.currentTarget.dataset.type] = !socialIcon[e.currentTarget.dataset.type]; 
    init(true);
}

const showCollapseBody = function (e) {
    e.stopPropagation()
    let num = getValue(ID, "collapseBodyShow");
    num[e.target.dataset.number] = !num[e.target.dataset.number];
    setValue(ID, "collapseBodyShow", num);
}

const mainFooter = function(){  
    const lang = getVariable("languages")[getStorage("lang")]
    const collapseBodyShow = getValue(ID, "collapseBodyShow")

    return(
        <div class="c-footer__container c-container">
            <div class="c-footer__nav" id="accordionFooter">
                <div class="c-footer__accordion c-accordion">
                    <span class="c-accordion__header" id="headingOne">
                        <button
                            class={`c-accordion__btn ${collapseBodyShow.one ? '' : 'c-accordion__btn--collapsed'}`}
                            type="button"
                            onclick={showCollapseBody}
                            data-number="one"
                        >
                            {lang.span.company}
                        </button>
                    </span>
                    <div
                        id="collapseOne"
                        class={`c-accordion__collapse c-accordion__collapse--collapse ${!collapseBodyShow.one ? '' : 'c-accordion__collapse--show'}`}
                        style={`${!collapseBodyShow.one ? '' : 'max-height: 200px'}`}
                    >
                        <div class="c-accordion__body">
                            <a class="c-footer__link" onclick={siteLink} href="/about/">
                                <span>{lang.a.about}</span>
                            </a>
                            <a class="c-footer__link" onclick={siteLink} href="/blog/"><span>{lang.a.blog}</span></a>
                            <a class="c-footer__link" onclick={siteLink} href="/career-whith-us/"><span>{lang.a.career}</span></a>
                            <a class="c-footer__link" onclick={siteLink} href="/media/"><span>{lang.h.mediaUs}</span></a>

                            <a class="c-footer__link" onclick={siteLink} href="/university/"><span>Крипто университет</span></a>
                            <a class="c-footer__link" href="/assets/docs/whitePaperEN.pdf">
                                <span>{lang.span.whitePaper}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="c-footer__accordion c-accordion">
                    <span class="c-accordion__header" id="headingTwo">
                        <button
                            class={`c-accordion__btn ${collapseBodyShow.two ? '' : 'c-accordion__btn--collapsed'}`}
                            type="button"
                            onclick={showCollapseBody}
                            data-number="two"
                        >
                            {lang.span.support}
                        </button>
                    </span>
                    <div
                        id="collapseTwo"
                        class={`c-accordion__collapse c-accordion__collapse--collapse ${!collapseBodyShow.two ? '' : 'c-accordion__collapse--show'}`}
                        style={`${!collapseBodyShow.two ? '' : 'max-height: 200px'}`}
                    >
                        <div class="c-accordion__body">
                            <a class="c-footer__link" id="supportSummon" data-action="supportModal" data-nofollow="true" href=""><span>{lang.a.supportCenter}</span></a>
                            <a class="c-footer__link" onclick={siteLink} href="/contacts/"><span>{lang.a.contacts}</span></a>
                            <a class="c-footer__link" onclick={siteLink} href="/affiliate/"><span>{lang.h.affiliate}</span></a>
                        </div>
                    </div>
                </div>
                <div class="c-footer__accordion c-accordion">
                    <span class="c-accordion__header" id="headingThree">
                        <button
                            class={`c-accordion__btn ${collapseBodyShow.three ? '' : 'c-accordion__btn--collapsed'}`}
                            type="button"
                            onclick={showCollapseBody}
                            data-number="three"
                        >
                            {lang.span.rules}
                        </button>
                    </span>
                    <div
                        id="collapseThree"
                        class={`c-accordion__collapse c-accordion__collapse--collapse ${!collapseBodyShow.three ? '' : 'c-accordion__collapse--show'}`}
                        style={`${!collapseBodyShow.three ? '' : 'max-height: 200px'}`}
                    >
                        <div class="c-accordion__body">
                            <a class="c-footer__link" onclick={siteLink} href="/terms-of-service/"><span>{lang.a.userTerms}</span></a>
                            <a class="c-footer__link" onclick={siteLink} href="/data-policy/"><span>{lang.a.dataPolicy}</span></a>
                            <a class="c-footer__link" onclick={siteLink} href="/cookies-policy/"><span>{lang.a.cookies}</span></a>
                        </div>
                    </div>
                </div>
                <div class="c-footer__accordion c-accordion">
                    <span class="c-accordion__header" id="headingFour">
                        <button
                            class={`c-accordion__btn ${collapseBodyShow.four ? '' : 'c-accordion__btn--collapsed'}`}
                            type="button"
                            onclick={showCollapseBody}
                            data-number="four"
                        >
                            CEM
                        </button>
                    </span>
                    <div
                        id="collapseFour"
                        class={`c-accordion__collapse c-accordion__collapse--collapse ${!collapseBodyShow.four ? '' : 'c-accordion__collapse--show'}`}
                        style={`${!collapseBodyShow.four ? '' : 'max-height: 200px'}`}
                    >
                        <div class="c-accordion__body">
                            <a class="c-footer__link" target="_blank" href="https://cemblockchain.com/"><span>CEM Blockchain</span></a>
                            <a class="c-footer__link" target="_blank" href="https://cemscan.com/"><span>CEM Explorer</span></a>
                        </div>
                    </div>
                </div>
                <div class="c-footer__accordion c-accordion">
                    <a href="https://apps.apple.com/ru/app/crypto-emergency/id1635628021" class="c-button__app">
                        <img src={appstore} />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.cryptoemergency" class="c-button__app">
                        <img src={googleplay} />
                    </a>
                </div>
            </div>
            <div class="c-footer__bottom">
                <div class="c-footer__copyright">
                    ©2020-2022 Crypto Emergency
                </div>
                <div class="c-footer__socials">
                    <div class="footer-icon-block c-socialicon">
                        <div style={socialIcon.telegram ? '' : 'display:none;'} class="c-socialicon__tooltip">
                            <div>
                                <a
                                    target="_blank"
                                    href="https://t.me/cryptoemergencychat"
                                >
                                    <img src={telegram}/>
                                     Русский
                                </a>
                            </div>
                            <div>
                                <a
                                    target="_blank"
                                    href="https://t.me/emergencycrypto"
                                >
                                    <img src={telegram}/>
                                    English
                                </a>
                            </div>
                        </div>
                        <a
                            id="footer_telegram_icon"
                            class="c-socialicon__link"
                            onclick={showSocial}
                            data-type="telegram"
                        >
                            <img class="c-socialicon__icon" src={telegram} />
                        </a>
                    </div>
                    <div class="c-socialicon">
                        <div style={socialIcon.youtube ? '' : 'display:none;'} class="c-socialicon__tooltip">
                            <div>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/"
                                >
                                    <img src={youtube}/> Русский 
                                </a>
                            </div>
                            <div>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/channel/UCdDWOveIuvqkyusDK1gv4ig/"
                                >
                                    <img src={youtube}/> English 
                                </a>
                            </div>
                        </div>
                        <a
                            id="footer_youtube_icon"
                            class="c-socialicon__link"
                            onclick={showSocial}
                            data-type="youtube"
                        >
                            <img class="c-socialicon__icon" src={youtube} />
                        </a>
                    </div>
                    <div class="c-socialicon">
                        <a
                            href="https://twitter.com/cryptoemergency"
                            target="_blank"
                            class="c-socialicon__link"
                        >
                            <img class="c-socialicon__icon" src={twitter} />
                        </a>
                    </div>
                    <div class="c-socialicon">
                        <a
                            href="https://discord.com/invite/Qdm7W8DjYc"
                            target="_blank"
                            class="c-socialicon__link"
                        >
                            <img class="c-socialicon__icon" src={discord} />
                        </a>
                    </div>
                    <div class="c-socialicon">
                        <a
                            href="https://github.com/CryptoEmergency"
                            target="_blank"
                            class="c-socialicon__link"
                        >
                            <img class="c-socialicon__icon" src={github} />
                        </a>
                    </div>
                    <div class="c-socialicon">
                        <div style={socialIcon.tiktok ? '' : 'display:none;'} class="c-socialicon__tooltip c-socialicon__tooltip--right">
                        <div><a target="_blank" href="https://vm.tiktok.com/ZSefEMs2c/" rel="nofollow noopener" data-type="social" data-count="tiktokRu"><img src={tiktok}/> Русский </a></div>
                        <div><a target="_blank" href="https://vm.tiktok.com/ZSefExJrr/" rel="nofollow noopener" data-type="social" data-count="tiktokEn"><img src={tiktok}/> English </a></div>
                        </div>
                        <a
                            id="footer_tiktok_icon"
                            class="c-socialicon__link"
                            onclick={showSocial}
                            data-type="tiktok"
                        >
                            <img class="c-socialicon__icon" src={tiktok} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ID = "mainFooter";

const init = function(reload){
    if (!reload) {
        setValue(ID, "collapseBodyShow", {
            "one": false,
            "two": false,
            "three": false,
            "four": false,
        })

        socialIcon={
            telegram:false,
            tiktok:false
        }
    }

    makeDOM(mainFooter(), ID)
}
export {init}