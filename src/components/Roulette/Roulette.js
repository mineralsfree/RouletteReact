import React from 'react';
import './Roulette.less'
import $ from 'jquery';

export class Roullette extends React.Component {

    componentDidMount() {
        console.log(this.props);

        var $inner = $('.inner'),
            $reset = $('#reset'),
            $data = $('.data'),
            $mask = $('.mask'),
            maskDefault = 'Place Your Bets',
            timer = 9000;


        $reset.hide();

        $mask.text(maskDefault);

        //$spin.on('click',()=>);


        $reset.on('click', function () {
            // remove the spinto data attr so the ball 'resets'

        });

// so you can swipe it too


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const red = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];
        console.log(this.props);
        let $inner = $('.inner'),
            $reset = $('#reset'),
            $data = $('.data'),
            $mask = $('.mask'),
            $spin = $('#spin'),

            maskDefault = 'Place Your Bets',
            timer = 9000;
        // get a random number between 0 and 36 and apply it to the nth-child selector
        let randomNumber = this.props.value.count;
        let color = null;
        $inner.attr('data-spinto', randomNumber).find('li:nth-child(' + randomNumber + ') input').prop('checked', 'checked');
        // prevent repeated clicks on the spin button by hiding it
        $(this).hide();
        // disable the reset button until the ball has stopped spinning
        $reset.addClass('disabled').prop('disabled', 'disabled').show();

        $('.placeholder').remove();


        setTimeout(function () {
            $mask.text('No More Bets');
        }, timer / 2);

        setTimeout(function () {
            $mask.text(maskDefault);
        }, timer + 500);


        // remove the disabled attribute when the ball has stopped
        setTimeout(function () {
            $reset.removeClass('disabled').prop('disabled', '');

            if ($.inArray(randomNumber, red) !== -1) {
                color = 'red'
            } else {
                color = 'black'
            }
            ;
            if (randomNumber == 0) {
                color = 'green'
            }
            ;

            $('.result-number').text(randomNumber);
            $('.result-color').text(color);
            $('.result').css({'background-color': '' + color + ''});
            $data.addClass('reveal');
            $inner.addClass('rest');

            let $thisResult = '<li class="previous-result color-' + color + '"><span class="previous-number">' + randomNumber + '</span><span class="previous-color">' + color + '</span></li>';

            $('.previous-list').prepend($thisResult);
            $inner.attr('data-spinto', '').removeClass('rest');
            $(this).hide();
            $spin.show();
            $data.removeClass('reveal');

        }, timer);


    }

    render() {

        return (<div className="main">
            <button type="button" className="btn" id="spin"><span className="btn-label">Spin</span></button>
            <button type="button" className="btn btn-reset" id="reset"><span className="btn-label">New Game</span>
            </button>
            <div className="plate" id="plate">
                <ul className="inner">
                    <li className="number"><label><input type="radio" name="pit" value="32"/><span
                        className="pit">32</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="15"/><span
                        className="pit">15</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="19"/><span
                        className="pit">19</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="4"/><span
                        className="pit">4</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="21"/><span
                        className="pit">21</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="2"/><span
                        className="pit">2</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="25"/><span
                        className="pit">25</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="17"/><span
                        className="pit">17</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="34"/><span
                        className="pit">34</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="6"/><span
                        className="pit">6</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="27"/><span
                        className="pit">27</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="13"/><span
                        className="pit">13</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="36"/><span
                        className="pit">36</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="11"/><span
                        className="pit">11</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="30"/><span
                        className="pit">30</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="8"/><span
                        className="pit">8</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="23"/><span
                        className="pit">23</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="10"/><span
                        className="pit">10</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="5"/><span
                        className="pit">5</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="24"/><span
                        className="pit">24</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="16"/><span
                        className="pit">16</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="33"/><span
                        className="pit">33</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="1"/><span
                        className="pit">1</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="20"/><span
                        className="pit">20</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="14"/><span
                        className="pit">14</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="31"/><span
                        className="pit">31</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="9"/><span
                        className="pit">9</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="22"/><span
                        className="pit">22</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="18"/><span
                        className="pit">18</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="29"/><span
                        className="pit">29</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="7"/><span
                        className="pit">7</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="28"/><span
                        className="pit">28</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="12"/><span
                        className="pit">12</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="35"/><span
                        className="pit">35</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="3"/><span
                        className="pit">3</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="26"/><span
                        className="pit">26</span></label></li>
                    <li className="number"><label><input type="radio" name="pit" value="0"/><span
                        className="pit">0</span></label></li>
                </ul>
                <div className="data">
                    <div className="data-inner">
                        <div className="mask"></div>
                        <div className="result">
                            <div className="result-number">00</div>
                            <div className="result-color">red</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="previous-results">
                <ol className="previous-list">
                    <li className='visuallyhidden placeholder'>No results yet.</li>
                </ol>
            </div>
        </div>)
    }

};