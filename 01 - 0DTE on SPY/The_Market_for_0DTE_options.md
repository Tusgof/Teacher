# The Market for 0DTE options: The Role of Liquidity Providers in Volatility Attenuation

**Greg Adams**  
*The Wharton School*

**Jean-Sébastien Fontaine**  
*Bank of Canada*

**Chay Ornthanalai**  
*Rotman School of Management, University of Toronto*  
*Canadian Derivatives Institute*

---

### Abstract
Using intraday option trading volume from 2019–2023, we show that option market makers’ intermediation of S&P 500 index options with zero-days-to-expiration (0DTE) lowers the index volatility, on average. Exploiting exogenous variation in contract expiration days, we show that the index volatility decreases by 60–90 annualized basis points on days with 0DTE trading. We find that market makers match most 0DTE order flows, but absorb end-users’ trades in long-dated options that eventually become 0DTE positions. Hedging these expiring positions creates intraday order flow in the index futures that dampens volatility. The results run counter to concerns that 0DTE market makers amplify volatility. Instead, their increased hedging activity has attenuated the volatility of the underlying index.

**Keywords:** 0DTE; Index Options; Volatility; Market Intermediaries; Intraday Hedging  
**JEL:** G14

---

> [!NOTE]
> **Author Note & Acknowledgments**  
> This version: June 17th, 2025. First draft: May 3rd, 2024. For helpful comments, we thank Caio Almeida (discussant), Karamfil Todorov (discussant), Claire Célérier, Ing-Haw Cheng, Evan Dudley, Neil Pearson, and seminar and conference participants at the Canadian Derivatives Institute (CDI) Conference, the University of Toronto, the Virtual Derivatives Workshop (VDW), and the Financial Intermediation Research Society Conference. We thank the Bank of Canada, CDI, Rotman-FinHub, Rotman-TDMDAL, and the Social Sciences and Humanities Research Council (SSHRC) for financial support. 
> 
> *   Adams is affiliated with the Wharton School and can be reached at [adams99@upenn.edu](mailto:adams99@upenn.edu).
> *   Fontaine is affiliated with the Bank of Canada and can be reached at [jsfontaine@bank-banque-canada.ca](mailto:jsfontaine@bank-banque-canada.ca).
> *   Ornthanalai is affiliated with the Rotman School of Management and the Canadian Derivatives Institute. Correspondence can be sent to Chay Ornthanalai at 105 St. George Street, Toronto, ON, Canada, M5S4E6; Email: [chay.ornthanalai@rotman.utoronto.ca](mailto:chay.ornthanalai@rotman.utoronto.ca).
> 
> Views expressed in this paper are those of the authors and do not represent those of the Bank of Canada. All remaining errors are our own.

---

## 1. Introduction

The demand to trade SPX options on the S&P 500 index has recently shifted toward contracts that expire at the end of the day, known as zero-days-to-expiration options (0DTE). This shift has sparked concerns because short-dated options are much more sensitive to changes in the underlying security price. In 2023, these contracts represent close to half of the daily trading volume in index options. If market makers absorb large end-users’ demand for 0DTE, then their hedging of these highly sensitive contracts could amplify the volatility of the underlying index. In this paper, we estimate the effects of 0DTE trading on index volatility and offer a detailed *intraday* empirical analysis of the market makers’ role in the intermediation of 0DTE options.

A 0DTE contract is an S&P 500 index option with symbol root SPXW that expires at the end of the trading day.[^1] Our first contribution is to show that, on average, the volatility of S&P 500 index returns is lower by about 60 to 90 annualized basis points on days with 0DTE trading, across measures of volatility and across specifications. We identify this effect using the plausibly exogenous variations in SPXW expirations on Tuesdays and Thursdays between 2019 and May 2022.[^2] We interpret this result as the treatment effect of 0DTE trading on the index volatility. Using a difference-in-differences analysis, we verify that when 0DTE options start trading every business day in the spring of 2022, it eliminates previously existing differences in index volatility across days with and without 0DTE trading.

In our second contribution, we link the lower index volatility to the increased market makers’ hedging needs due to 0DTE positions. We offer a framework to measure how market makers should adjust their holdings of the underlying security to hedge (i) the exposure to new positions since the last adjustment, their *net delta*, and (ii) changes in the exposures due to positions accumulated in earlier periods, their *net gamma*. These measures can be interpreted as the fraction of the total shares of the S&P 500 index that market makers should sell to hedge against a one-percent increase in the S&P 500 index, and vice versa. If the net gamma and net delta are positive, then the market makers should buy shares after a decline in the index value and sell after an increase, which means that their trading activity would dampen volatility.

We estimate the net delta and net gamma measures of the market makers using intraday open-close option volume data from the CBOE. During 2019–2023, we find that option market makers nearly match intraday buy and sell order flows of SPX options, resulting in a small net delta of 0.1 percent, on average. However, the unmatched order flow of new positions accumulates into aggregate positions in SPX options with an average net gamma of about one percent. This implies that market makers need to sell one percent of the total shares in the S&P 500 index when the index level increases by one percent to keep the positions hedged, and vice versa. Using the same variations in SPXW expiration days as before to estimate the treatment effect, we find that market makers’ net gamma increases by 0.2 percentage points on days with 0DTE trading. Using a two-stage least squares regression, we find that a one-percent increase in market makers’ net gamma on days with 0DTE trading is associated with a decrease in realized volatility of about 3 percentage points.

Our third contribution provides intraday evidence supporting the hedging needs of market makers as the mechanism that dampens the index volatility. To do so, we link the role of market makers in intermediating intraday 0DTE trading with the intraday index volatility and the intraday order flow of the S&P 500 E-mini futures, which is the main instrument for hedging SPX options. For each contract, and for different investor groups, we calculate the new position that the market makers absorb during each 10-minute interval as well as the pre-existing position that the market makers already hold from the last interval. This delivers an intraday measurement of market makers’ net delta and net gamma separately for 0DTE and non-0DTE positions. We also compute the E-mini futures’ realized volatility and order flow in every 10-minute interval. Our baseline panel regressions use a rich set of fixed effects that isolate the impact of intraday variations in market makers’ hedging needs while accounting for the intraday persistence and intraday seasonality of the index volatility.

We find that the intraday net gamma hedging needs of market makers from 0DTE positions is a robust predictor of the index volatility. Over the next 10-minute interval, the index volatility is lower by about 35 to 57 annualized basis points, on average, after a one-standard deviation increase in the 0DTE net gamma across measures of volatility. This predictive relationship holds over the next hour, with coefficient estimates that decay smoothly to zero afterward, suggesting that market makers actively hedge their outstanding 0DTE positions starting within 10 minutes and up to about an hour. The sum of these predictive coefficients over the next hour yields an estimate of the cumulative intraday effect of the market makers’ net gamma on index volatility. This intraday cumulative effect is close to the treatment effect of 0DTE trading that we obtained from the two-stage least squares regression above. This similarity supports the intraday hedging mechanism as an explanation for the net reduction in index volatility on days with 0DTE trading.

We dig deeper to pin down the intraday hedging mechanism by showing that the order flow of the E-mini futures responds more strongly to current index returns as market makers’ hedging needs increase. On average, there is a negative relationship between the 10-minute index return and the E-mini order flow during the next interval. This relationship strengthens significantly when market makers have elevated 0DTE net gamma hedging needs. Even more telling, this predictive response of E-mini order flow lasts up to about one hour, with a decaying effect that mirrors the response of volatility to the change in market makers’ hedging needs. Putting these results together, they suggest that changes to the S&P 500 index alter market makers’ holdings on the index futures in the counter-cyclical direction consistent with their positive 0DTE net gamma. Importantly, higher levels of 0DTE net gamma trigger larger hedging needs, which manifest in a stronger counter-cyclical E-mini order flow that dampens the index volatility. To be clear, this trail of evidence is circumstantial. We cannot directly link the E-mini order flow with specific option market makers. Nonetheless, the direction, strength, and timing of the predictive relationships are consistent with market makers hedging their outstanding 0DTE positions being the main mechanism that dampens the index volatility.

Finally, our fourth contribution shows that the positive net gamma of market makers from 0DTE positions does not stem from their trading of SPXW contracts on the expiration date. Rather, it originates from intermediating longer-dated options that eventually become 0DTE options. We document that end-users, on net, use long-dated options to short at-the-money straddles and bet against volatility.[[^3]] The market makers stand on the other side, absorbing this position and holding it until the contracts become 0DTE. As these at-the-money contracts are expiring, their gamma significantly increases. This creates a large positive net gamma for market makers which increases their hedging needs in the direction that dampens the index volatility.

Overall, the results timely add to recent discussions on the effects that the emergence of 0DTE trading may have on the stock market volatility.[[^4]] We present evidence to counter concerns that 0DTE trading amplifies the stock market index volatility. Instead, we conclude that market makers manage 0DTE hedging needs dynamically in the direction that results in the net reduction of the index volatility. We emphasize that our results represent the average effect. We cannot preclude other effects in extreme situations.

This paper is related to the seminal literature on the introduction of option contracts and its impact on the underlying security market. The early results documented a positive listing effect on the underlying stock return (e.g., Branch and Finnerty (1981); Conrad (1989)) and that price discovery tends to occur in the option market (e.g., Easley, O’Hara, and Srinivas (1998), Pan and Poteshman (2006)). The impact of option trading on the underlying security can also arise through hedging by liquidity providers in the option market. Ni, Pearson, and Poteshman (2005) document the effect of stock price clustering on option expiration dates that are due to hedge rebalancing by option market makers. We contribute by documenting how the 0DTE market has changed the hedging exposures of market makers within a day, which generates a new predictive intraday relationship on the index volatility.

Our paper is closely related to Ni, Pearson, Poteshman, and White (2020) which examines the impact of market makers’ net gamma from longer-dated options at the daily level and finds that it negatively predicts the underlying stock volatility. Our results sharpen their finding by distinguishing between how 0DTE and non-0DTE hedging needs impact the underlying asset volatility within the day. While we find a significant negative intraday relationship between market makers’ net gamma from 0DTE contracts and the index volatility throughout the day, we do not find the same result for non-0DTE contracts until the final hour of the trading day. This suggests that market makers hedge their 0DTE positions throughout the day while only hedging their non-0DTE positions just before the market closes.[[^5]] Our finding that longer-dated options are hedged towards the end of the day supports the conclusion of Baltussen, Da, Lammers, and Martens (2021) that end-of-day hedging by option market makers leads to a predictable intraday momentum in the last 30 minutes before the market closes.

We also provide new evidence that highlights the intraday hedging mechanism in the E-mini futures market. We show that E-mini order flow responds counter-cyclically stronger against index returns as the market makers’ 0DTE net gamma increases, which closely matches the dampening effect observed on index volatility within the day. These findings suggest that the introduction of 0DTE trading has altered the market makers’ hedging activity of soon-to-expire SPXW within the day, while the hedging of longer-dated contracts appears concentrated toward the end of the day.

Our paper belongs to the literature that investigates the growing demand for trading 0DTE options. Beckmeyer, Branger, and Gayda (2023) find that retail and institutional investors are driving the shift to the trading of 0DTE contracts. Brogaard, Han, and Won (2024) find that the increase in share of trading volume due to the 0DTE contract is associated with an increased volatility of the daily index returns, suggesting that 0DTE trading exacerbates market volatility. Their study estimates the impact of 0DTE trading using past 0DTE trading volume as an instrument. Our paper provides evidence of the opposite effect using a novel identification strategy that allows us to compare the effect of 0DTE trading on index volatility during the same week, and the same interval time of day. In a contemporaneous study, Dim, Eraker, and Vilkov (2025) find that higher market makers’ net gamma from 0DTE or non-0DTE positions both predict a lower level of intraday index volatility.

A recent study by Amaya, Garcia-Ares, Pearson, and Vasquez (2025) estimates the range of impact that the market makers of SPX options could have on the index volatility using a GARCH model. Their study concludes that market makers’ 0DTE net gamma could attenuate and amplify the index volatility from July 2020 through June 2023, but the average effect is negative.

Finally, we contribute to this growing literature on 0DTE by providing new evidence of end-user trading demand that leads market makers to have a large positive net gamma exposure. We show that the trading of 0DTE on their expiry day *is not* the reason. In fact, it is due to end-users’ previously established positions in longer-dated SPXW contracts that eventually become 0DTE.[[^6]]

The remainder of this paper is organized as follows. Section 2 documents the impact of 0DTE trading on the stock market volatility. Section 3 describes a simple model for measuring the market makers’ hedging needs and tests how they are affected by 0DTE trading. Section 4 documents the intraday impacts of market makers’ hedging needs on the index volatility and on the order flow of E-mini futures. Section 5 examines the source of market makers’ hedging needs that led to the lower index volatility on days with 0DTE trading. Finally, Section 6 concludes.

---

## 2. The Impact of 0DTE trading on the Index Volatility

### 2.1. Introductions of 0DTE
SPX options are European-style put or call contracts referencing the S&P 500 index and trading on the Chicago Board of Options Exchange (CBOE). 0DTEs are a subset of these S&P 500 index options: they have a symbol root “SPXW” and expire at the end of the current trading day. We use the label non-0DTE for all other SPX contracts, including those with a symbol root SPXW on days before their expiration date.

Figure 1 illustrates the growing demand for 0DTE trading. From the CBOE’s daily open-close volume database, we extract the net end-of-day buy and sell volumes for each contract and for each investor type identified by the CBOE: *Customers*, *Professional Customers*, *Firm Proprietary*, and *Broker-Dealers*. In Panel A, we report the average daily trading volume summed across all investors other than the market makers for 0DTE and non-0DTE contracts, separately. In Panel B, we report trading shares for each of the investor types.[[^7]]

Consistent with existing results, Panel A shows that 0DTE contracts attract an increasing share of S&P 500 index options volume. On average during 2023, around 3 million SPX contracts traded every day and 0DTE contracts drew about half of the total trading volume. In Panel B, we find that *Customers* generated a growing share of daily 0DTE trades, representing more than 90 percent of the daily 0DTE volume in 2023, on average. *Customers* include retail as well as institutional investors who together are considered the primary end-users of options.

0DTE options became available in 2005 when the CBOE introduced a weekly SPX contract with a Friday expiry and settled using the index closing value (PM settlement). This contract differs from other SPX options that traditionally settled using the opening market value (AM settlement). This innovation in when contracts are settled enabled investors to trade SPX options during the trading day on their expiration date and, thus, the emergence of 0DTE options.

Other PM-settled SPX options were subsequently introduced in a staggered way over time. Contracts that expire on the last business day of each quarter (SPX Quarterly) and on the last business day of each month (SPX end-of-month) were introduced in 2006 and 2014, respectively. In 2016, the CBOE introduced regular PM-settled contracts expiring every week on Mondays and Wednesdays. More recently, regular PM-settled SPX options expiring on Tuesdays and Thursdays were introduced in April and May 2022, respectively. The symbol root SPXW represents all these PM-settled contracts. We emphasize that every 0DTE contract is PM-settled, but PM-settled options are not 0DTE until the day of their expiration date.

Our identification strategy exploits the variations in weekdays with 0DTE trading. We are interested in the period after 2016 but before April 2022. During this period, 0DTE contracts regularly expired on Mondays, Wednesdays, and Fridays. However, 0DTE trading also sometimes happened on specific Tuesdays or Thursdays. This could happen when the end-of-month and end-of-quarter contracts expired on one of these two weekdays. This could also happen where there was a business holiday on a Monday, Wednesday, or Friday, which the CBOE treats as a “holiday exception” by moving the expiration date to the neighboring business day.[[^8]] Therefore, these events generated plausibly exogenous variations in the presence of 0DTE trading on Tuesdays and Thursdays during this period of interest.

Figure 2 illustrates the variations in 0DTE trading volumes across weekdays. We plot the daily 0DTE trading volumes separately for each weekday during the period between January 2019 and December 2023, which covers the data in our sample. In the upper panel, we report 0DTE volumes on Mondays, Wednesdays, and Fridays. In the lower panel, we report the 0DTE volumes on Tuesdays and Thursdays. Two vertical red lines indicate the dates when regular SPXW weekly contracts were introduced on Tuesday and Thursday, respectively.[[^9]]

In the upper panel, we see that the daily trading volumes for Monday, Wednesday and Friday contracts share a common trend that is consistently growing throughout the sample. If anything, the trading volume appears slightly larger on Fridays, on average. In the lower panel, we see that the 0DTE trading volume is typically zero before the vertical red lines. However, there are some occasional exceptions scattered between 2019 and early 2022 and correspond to a quarter-end date, a month-end date, or a holiday exception. The trading volume on these exceptional Tuesdays and Thursdays with 0DTE is similar to the trading volume on other weekdays in the upper panel. After April 2022, 0DTE trading occurs on every Tuesday and Thursday and the trading volumes are similar and share a consistent trend across all weekdays in both panels.

### 2.2. Intraday Volatility Measures
This section establishes the effect of 0DTE trading on the S&P 500 index volatility. We calculate the daily index volatility for every 10-minute interval between 9:30 am and 4:00 pm, separately for the S&P 500 cash index and the S&P 500 E-mini futures (E-mini). We choose the frequency of 10-minute because it corresponds to the highest frequency that the CBOE provides information on the intraday hedging needs of option market makers. This allows us to examine the impact of market makers’ hedging needs in the most granular form.

The SPX contracts settle based on the cash index, but this index is not a traded security and cannot be used for hedging. Instead, the E-mini is a highly liquid futures contract referencing the S&P 500 index and commonly used for hedging SPX options.

We obtain the intraday cash index data from the CBOE and as well as the top-of-the-book intraday data with a timestamp up to the second for the E-mini futures from the Chicago Mercantile Exchange (CME). We follow Andersen and Bondarenko (2015) in using the front-month futures contract until it reaches 8 days to expiry, after which point we switch to the next quarterly contract. This ensures that we use the most actively traded futures contract. We sample the data every minute by taking the average of index values and of E-mini futures prices over a 20-second interval centered on every minute mark. Christensen, Oomen, and Podolskij (2014) show that this pre-averaging method mitigates some of the noise in tick data.[[^10]] We then construct two measures of volatility for every 10-minute interval. The first measure *Abs Return* is the absolute value of the logarithmic return in a given 10-minute interval. The second measure *Realized Vol* is the square root of the sum of squared one-minute log returns in this 10-minute interval. We scale both 10-minute volatility measures to annualized terms by assuming 252 trading days per year and 39 10-minute intervals per trading day.

### 2.3. 0DTE Trading and Intraday Volatility
We estimate the impact of 0DTE trading on the index volatility using an ordinary least squares (OLS) regression. Each observation corresponds to a 10-minute interval in a trading day. There are 39 observations of 10-minute intervals within each trading day. The independent variable of interest is *0DTE Trading*, an indicator equal to 1 if an SPXW contract expires at the end of the day and 0 otherwise. Its coefficient measures the volatility difference between days with and without 0DTE trading. The sample begins on January 2, 2019, and ends on May 19, 2022, after which 0DTE options regularly trade for every weekday, and thus, there are no further variations in *0DTE Trading*. Table 1 reports the results based on the cash index data and the E-mini futures in Panels A and B, respectively. In each panel, results based on the *Abs Return* and *Realized Vol* measures are reported in Columns (1)-(3) and Columns (4)-(6), respectively. The reported t-statistics correspond to the Newey-West standard errors that account for time-series correlations within each trading day up to 5 lags.[[^11]]

First, Columns (1) and (4) report coefficient estimates from regressions that include $Year \times Week \times Time$ fixed effects, where $Year$ is the calendar year, $Week$ is the calendar week of the year, and $Time$ is a 10-minute interval within the day. The coefficient estimates of *0DTE Trading* are 68 and 49, in annualized basis points, for *Abs Return* and *Realized Vol*, respectively. In other words, we find that intraday volatility is lower by 68 or 49 basis points on average when 0DTE trading is present, after controlling for the average volatility during the same year, the same week, and the same 10-minute interval within a day.

Next, Columns (2) and (5) report results from regressions that also include $Day\text{-}of\text{-}Week$ fixed effects, in addition to the $Year \times Week \times Time$ fixed effects. This controls for potential differences between weekdays. The point estimate in this specification is identified by the variations in the presence of 0DTE trading on Tuesdays and Thursdays. We find larger and highly statistically significant coefficient estimates for *0DTE Trading*. The results imply that intraday volatility is lower by 61 and 87 annualized basis points, on average.

Finally, Columns (3) and (6) of Table 1 report results from regression that include $Day\text{-}of\text{-}Week \times Year$ instead of $Day\text{-}of\text{-}Week$ fixed effects. We find that the results are robust. The coefficient estimates are essentially unchanged and remain statistically significant across calendar years.

Given the rich set of fixed effects included in the regression, and because the variation in the presence of 0DTE trading on Tuesdays and Thursdays is plausibly exogenous, we interpret the point estimates in Columns (3) and (6) of Table 1 as the treatment effect of 0DTE trading. On average, we find that the treatment effect of 0DTE trading on the index volatility is negative and economically significant. We note that the CBOE published the expiration dates of SPXW contracts in advance. Market participants could anticipate when SPXW contracts would expire and trade accordingly ahead of the day when they become 0DTE. In the final section of this paper, we will show that most of the outstanding option positions in 0DTE contracts came from longer-dated SPXW contracts that were established ahead in anticipation of their expiration.

### 2.4. The Introduction of SPXW with Tuesday and Thursday Expirations
The introduction in 2022 of regular weekly SPXW contracts expiring on Tuesdays and Thursdays provides a complementary way to test the impact of 0DTE trading on intraday volatility. If the presence of 0DTE trading is the mechanism behind the lower intraday volatility that we documented in Table 1, we expect this difference to disappear after 0DTE contracts regularly trade on every business day of the week.

This idea can be implemented in a difference-in-difference regression that we estimate for the sample period from January 2019 through December 2023. In effect, the regression model compares the intraday volatility on Tuesdays and Thursdays relative to other weekdays, before and after the introduction of new contracts with regular expiration dates on Tuesdays and Thursdays. For this purpose, the indicator variable *Introduction* is equal to 1 on and after April 26, 2022, and 0 otherwise, and the indicator variable *Tuesday/Thursday* is equal to 1 on Tuesdays or Thursdays and 0 otherwise. The variable of interest is the interaction of the two indicator variables $Tuesday/Thursday \times Introduction$. Note that in estimating this regression, we exclude the occasional Tuesdays and Thursdays when 0DTE trading was present before April 26, 2022.

The coefficient for *Introduction* measures any change in intraday volatility common across weekdays after the introduction of the new contracts in 2022. The coefficient for *Tuesday/Thursday* measures if the intraday realized volatility is different on these weekdays. The coefficient of the interaction term measures if this difference changes after the introduction of regular *0DTE Trading* on Tuesdays and Thursdays in 2022.

Table 2 reports the results. All specifications include $Year \times Week \times Time$ fixed effects. The point estimates of *Tuesday/Thursday* are positive and significant in all specifications, suggesting that the index volatility was higher on Tuesday and Thursday relative to the other business days in the same week. The magnitudes are consistent with the estimates reported in Columns (1) and (4) of Table 1 based on regressions that included the same fixed effects. The coefficient estimates on *Introduction* are negative in all cases, but with weak statistical significance that is not robust across specifications. Hence, we find no evidence that the introduction of SPXW contracts that expire weekly on Tuesdays and Thursdays affects the intraday volatility in general across all weekdays.

The coefficient estimates on $Tuesday/Thursday \times Introduction$ are negative, statistically significant, and the magnitude is similar to the coefficient estimates on *Tuesday/Thursday*. This result suggests that the higher intraday volatility on Tuesdays and Thursdays (relative to the other weekdays) disappeared after the CBOE introduced SPXW with weekly expirations on Tuesdays and Thursdays. The results in Table 2 are consistent with 0DTE trading having a causal effect on volatility. They suggest that, before April 26, 2022, the volatility of the S&P 500 index is higher on Tuesdays and Thursdays compared to other business days in the same week because of 0DTE contracts regularly traded on these other business days. However, the results also suggest that the introduction of SPXW contracts that expire weekly on Tuesdays and Thursdays closed this gap.

The rest of this paper investigates the mechanism behind the net reduction in the S&P 500 index intraday volatility that we documented. We are motivated by Ni, Pearson, Poteshman, and White (2020), who show that the market makers’ hedging needs due to holdings of non-0DTE options can affect the stock index volatility the following day. Building on their results, we provide evidence that the intraday hedging activity of market makers due to their holdings of 0DTE contracts can explain the reduction of intraday index volatility.

---

## 3. The Impact of 0DTE Trading on Market Makers’ Hedging

This section analyzes the mechanics of option market makers’ delta hedging and describes how this hedging can amplify or dampen the volatility of the underlying index returns. We first distinguish between the two sources of market makers’ hedging needs—the net delta and the net gamma—and we detail how to obtain them empirically using intraday open-close option volume data. We then show that the presence of 0DTE trading substantially changes market makers’ hedging needs, primarily through their increased net gamma, and that this hedging mechanism can explain the reduction in index volatility on 0DTE trading days that we documented in the previous section.

### 3.1. Market Makers’ Hedging Needs
We rely on the standard Black-Scholes assumptions. Consider a market maker that continually hedges her option positions against changes in the price of the underlying security. At time $t$, the market maker holds $w_t$ option contracts, where $O(S_t)$ is the option price and $S_t$ is the price of the underlying security. The market maker also holds a position $q_t = -w_t \cdot \Delta_t$ in the underlying asset to hedge against changes in the value of $S_t$, where $\Delta_t \equiv \partial O(S_t) / \partial S_t$.

The value of the market makers’ portfolio at time $t$ is $V_t = w_t \cdot O(S_t) + q_t \cdot S_t$, and this value evolves at time $t + 1$ as follows:
$$V_{t+1} = V^s_t + dV^s_{t+1} = (w_t + dw_{t+1}) \cdot O(S_{t+1}) + (q_t + dq_{t+1} + dn_{t+1}) \cdot S_{t+1} \qquad (1)$$
where $dw_{t+1} = w_{t+1} - w_t$ is the number of contracts bought or sold by the market maker. To keep the portfolio hedged, the market maker must rebalance her holdings of underlying securities by $dq_{t+1} + dn_{t+1}$. We distinguish between the number of underlying shares $dq_{t+1}$ needed to hedge her pre-existing option position $w_t$, and the number of underlying shares $dn_{t+1}$ needed to hedge her new option position $dw_{t+1}$.

Differentiating Equation (1) with respect to $S_{t+1}$ and setting the result to zero, we can solve for $dq_{t+1}$ and $dn_{t+1}$, as follows:
$$dn_{t+1} = -dw_{t+1} \cdot \Delta_{t+1} \qquad (2)$$
$$dq_{t+1} = -w_t \cdot (\Delta_{t+1} - \Delta_t) \qquad (3)$$
where we see that $dn_{t+1}$ depends on the new option position $dw_{t+1}$, and $dq_{t+1}$ depends on the previous-period option position $w_t$. The portfolio remains delta-hedged against changes in the underlying security price when the above conditions hold.

### 3.2. Net Delta
We start by looking at the hedging needs of the market maker against her *new* option positions. In practice, the market maker provides liquidity for multiple option contracts written on the same underlying security. We can aggregate the hedging needs due to the new positions in Equation (2) across all these related option contracts. We define the market makers’ net delta as the percentage of shares in the underlying asset that the market maker needs to *sell* to hedge a one-percent *increase* in the underlying asset price:
$$\text{Net}\Delta_{t+1} \equiv \left( \frac{-100 \cdot \sum_i dn_{i,t+1}}{M} \right) / \left( \frac{dS_{t+1}}{S_{t+1}} \right) \qquad (4)$$
$$= \frac{100}{M \cdot R_{t+1}} \sum_i dw_{i,t+1} \cdot \Delta_{i,t+1} \qquad (5)$$
where we introduce the subscript $i$ to index each option contract, and $M$ is the number of outstanding shares in the underlying security. In Equation (4), we multiply $dn_{i,t+1}$ by $-100$ because each option contract represents 100 underlying shares, and so that the hedging direction is opposite to the change in the price of the underlying security. To arrive at Equation (5), we substitute in for $dn_{i,t+1}$ using Equation (2).[^12]

Whether the market maker would need to buy or sell the underlying security to hedge her new position depends on: (i) whether the contract is a put or a call ($\Delta_{i,t+1}$ is positive for calls and negative for puts) and (ii) the sign of $dw_{i,t+1} / R_{t+1}$. For example, an increase in a call position when the underlying return is positive indicates that the market maker must sell some of the underlying securities since $\Delta_{i,t+1} > 0$ and $dw_{i,t+1} / R_{t+1}$ are positive.

We can interpret $\text{Net}\Delta_{t+1}$ as an elasticity measure of hedging needs. A positive value indicates that the market maker needs to hedge in the opposite direction of the underlying price change, which would *mitigate* the asset volatility. A negative value would imply the opposite effect.

Dim et al. (2025) introduce market makers’ hedging need measures defined in dollar units and standardized them with in-sample standard deviations for the regression analysis. By contrast, our market makers’ hedging need measures are defined as a share of the underlying index, which was motivated in Ni et al. (2020).

### 3.3. Net Gamma
We next examine the net hedging needs of the market maker against her *pre-existing* option positions. We aggregate hedging needs against the previous-period position in Equation (3) across all contracts with the same underlying security. Similar to the net delta, we define the market makers’ net gamma as the elasticity of hedging against pre-existing option positions. This measures how much shares that the market maker has to *sell* to hedge a one-percent *increase* in the underlying asset price as a percentage of the outstanding shares in the underlying asset:
$$\text{Net}\Gamma_{t+1} \equiv \left( \frac{-100 \cdot \sum_i dq_{i,t+1}}{M} \right) / \left( \frac{dS_{t+1}}{S_{t+1}} \right) \qquad (6)$$
$$\approx \frac{100 \cdot S_{t+1}}{M} \cdot \sum_i w_{i,t} \cdot \Gamma_{i,t+1} \qquad (7)$$
where $\Gamma_{i,t+1} \equiv \frac{\partial \Delta_{i,t+1}}{\partial S_{t+1}}$ is the gamma of the option contract $i$ at time $t + 1$ and we used an approximation to substitute for $dq_{i,t+1}$.[^13]

Note that $\Gamma_{i,t+1}$ is always positive due to the convexity of the option payoff. Therefore, the direction that the market maker needs to trade the underlying security to hedge the option contract $i$, which she carried over from the previous period, depends on the sign of $w_{i,t}$. When $\text{Net}\Gamma_{t+1} < 0$, the market maker would buy more of the underlying security as its price increases, exacerbating the underlying asset’s volatility. In contrast, when $\text{Net}\Gamma_{t+1} > 0$, the market maker would rebalance in the direction that would attenuate the volatility.

### 3.4. Measuring Market Makers’ Hedging Needs
This section details how we empirically calculate the market makers’ net delta and net gamma given in Equations (5) and (7), respectively. First, we calculate $M$, the number of outstanding shares in the S&P 500 index, as the ratio of the market value of the index portfolio divided by the index level. This value is calculated daily using information at the end of the previous trading day.

We use the CBOE’s intraday quote data and the intraday open-close volume data from the CBOE between January 2019 and December 2023. For every 10-minute mark in the trading day and for every contract, we obtain the delta $\Delta_{i,t}$ and the gamma $\Gamma_{i,t}$, as well as calculating the market makers’ pre-existing positions $w_{i,t}$ and new positions $dw_{i,t+1}$. The open-close data provide a snapshot of the cumulative volume and the direction of trade on the CBOE’s primary exchange for SPX options (the C1 exchange) at the 10-minute frequency for each option contract. This intraday data set is essential for studying the trading activity in 0DTE contracts throughout the day of their expiration.

The CBOE open-close data distinguishes trading volumes originating from the following four investor groups: *Customers*, *Professional Customers*, *Firm Proprietary*, and *Broker-Dealers*. Market makers take the other side of the trade in every case. In addition, the direction of trade is reported under four categories:
1.  **Open-buy** volume represents the number of contracts purchased to open new positions;
2.  **Open-sell** volume represents the number of contracts sold to open positions;
3.  **Close-buy** volume represents the number of contracts purchased to close existing positions;
4.  **Close-sell** volume represents the number of contracts sold to close existing positions.

The buy and sell volumes reported in the CBOE data capture the cumulative volumes from the start of the day up to each 10-minute interval mark. Therefore, to calculate the trading volume occurring within each 10-minute interval, we take the time-series difference of the cumulative volumes at each interval mark.

The gross trading volume of each option contract is the sum of its buy and sell volumes. The order imbalance (OIB) is the net order flow of each option contract. We calculate the OIB as the sum of buy orders minus the sum of sell orders, for every 10-minute interval, for each option contract $i$, and separately for each investor group $j$ as follows:
$$\text{OIB}(i, j, t) = \text{Open-Buy}_{i,j,t} + \text{Close-Buy}_{i,j,t} - \text{Open-Sell}_{i,j,t} - \text{Close-Sell}_{i,j,t} \qquad (8)$$

While the OIB measures the net flow of trades for each option contract, the net open interest (NOI) captures the net position that is held on each contract. We calculate the NOI for the option contract $i$ for each investor group $j$ by summing the OIB since the inception of the option contract until the end of the current 10-minute interval, as follows:
$$\text{NOI}(i, j, t) = \sum_{s=0} \text{OIB}(i, j, t - s) \qquad (9)$$
where $s$ is incremented until the 10-minute interval mark when the contract was first traded.

Each option contract exists in zero net supply. Therefore, option market makers take the other side of option transactions net of the holdings of all other investors. We estimate the OIB and the NOI of option market makers as the negative values of the aggregate OIB and NOI, respectively, across all other investor groups $j$ as follows:
$$\text{OIB}^{\text{MM}}_{i,t} = - \sum_j \text{OIB}(i, j, t) \qquad ; \qquad \text{NOI}^{\text{MM}}_{i,t} = - \sum_j \text{NOI}(i, j, t - 1)$$

The $\text{OIB}^{\text{MM}}_{i,t}$ and $\text{NOI}^{\text{MM}}_{i,t}$ represent the market makers’ new position $dw_{i,t+1}$ and pre-existing position $w_{i,t}$, respectively, in option contract $i$ at time $t$. We aggregate these positions across option contracts to calculate the market makers’ net delta and net gamma in Equations (5) and (7) across all contracts, or separately for the 0DTE and non-0DTE contracts.

### 3.5. Summary Statistics
Table 3 reports summary statistics for return volatility and for our intraday measures of market makers’ hedging needs. Panel A reports these statistics for the period before May 19, 2022, when 0DTE options did not regularly trade on Tuesdays and Thursdays. Panel B reports the statistics for the full sample. All variables are expressed in percentage terms.

The volatility measures exhibit similar statistics using either the cash index or the futures market data. The absolute returns measure has a lower time-series average but a wider distribution than the realized volatility measure. Both measures exhibit a slightly lower level but wider dispersion in the earlier period.

We find that net gamma averages 0.32 and 0.68 percent in the full sample for 0DTE and non-0DTE options, respectively. These values represent the fraction of S&P 500 shares that the market makers would need to sell (buy), on average, to hedge their pre-existing option positions against a one-percent increase (decrease) in the index level. The magnitudes suggest that market makers need to make economically large trades to hedge their net gamma exposures, which in turn may have an attenuating effect on the volatility of the underlying index. By contrast, net delta averages 0.06 and 0.05 percent, which is much smaller in magnitude. Therefore, on net, the hedging needs of market makers are mostly due to the stock of pre-existing positions that accumulate over time. Appendix Figure ?? plots the time-series of daily net gamma and net delta averages, showing that the hedging needs due to pre-existing positions are larger but also more volatile than the hedging needs arising due to new positions.

### 3.6. 0DTE Trading and Market Makers’ Hedging Needs
This section estimates the impact of 0DTE trading on the market makers’ hedging needs using the variations in SPXW expirations that we detailed in Section 2 as our identification strategy. We find that the magnitude and the direction of the treatment effect on the market makers’ hedging needs can explain the net reduction in index volatility that we documented in Table 1.

Table 4 reports results from estimating an OLS regression framework similar to Column (3) of Table 1 where *0DTE trading* is the independent variable of interest. However, the dependent variable is one of the measures of the market makers’ hedging needs. We report the results for net gamma ($\text{Net}\Gamma_t$) in Panel A and the results for net delta ($\text{Net}\Delta_t$) in Panel B. Column (1) in both panels reports the estimated change in hedging needs aggregated across all SPX options, while Columns (2) and (3) distinguish between the change in hedging needs due to 0DTE and non-0DTE contracts, respectively.

In Panel A, we find that market makers’ 0DTE net gamma increases by 0.29 percentage points on days with 0DTE trading, which is close to the average 0DTE net gamma of 0.26 percent in our sample.[^14] In aggregate, the market makers’ net gamma increases by 0.20 percentage points across all SPX contracts when 0DTE trading is present, because the market makers’ non-0DTE net gamma decreases by 0.09 percentage points. In Panel B, we find no evidence that the market makers’ 0DTE net delta increases on those days.

Taken together, the results in Tables 1 and 4 show that the presence of 0DTE trading leads to a higher net gamma of market makers and a lower index volatility. One interpretation connecting these two sets of results is that the hedging by market makers due to their increased net gamma exposure on days with 0DTE trading, relative to days without it, contributes to the dampening of the index volatility. With this interpretation in mind, we estimate the impact of this increase in market makers’ hedging needs on the index volatility using a two-stage least squares regression. The first-stage regression corresponds to Column (1) of Table 4 where we use the indicator variable *0DTE trading* as an instrument for $\text{Net}\Gamma_t$. In the second stage, we estimate how the instrumented $\widehat{\text{Net}\Gamma}_t$ is related to the index volatility $\sigma_{t+1}$ in the next 10-minute interval. Both stages of the regression include the same fixed effects as in Columns (3) and (6) of Table 1.

Table 5 reports the results. Panels A and B report the results based on the *Abs Return* and *Realized Vol*, respectively. The coefficient estimates are negative and highly statistically significant in all cases. The estimates suggest that an increase of one-percentage point in 0DTE $\text{Net}\Gamma_t$ may decrease the index intraday volatility in the next 10-minute interval by as much as 4.3 annualized percentage points when measured with the absolute return, and by as much as 3.0 percentage points when measured with the realized volatility.

The magnitude of these estimates is consistent with the magnitude of volatility reduction that we documented on days with 0DTE trading. To see this, we multiply these coefficient estimates with the increase in the market makers’ net gamma of 0.2% from Table 4. This yields decreases in intraday volatility that match Columns (3) and (6) of Table 1. These regressions share the same set of fixed effects, and thus the results are directly comparable. For instance, looking at *Abs Return*, multiplying 0.20% with $-4.3$ imputes an estimated dampening effect on the index volatility of 0.86%, matching the result in Column (3) of Table 1.

Overall, we find that the market-makers’ hedging needs, measured by their *Net Gamma*, significantly increase on days with 0DTE trading and that this can explain the reduction in the index volatility that we documented. We note that this interpretation implicitly assumes that the market makers hedge their net gamma exposures within each day, and in the direction that attenuates the index price movements. The next section addresses this assumption by providing intraday evidence linking the market makers’ hedging needs with the intraday index volatility and the order flow in E-mini futures market.

---

## 4. Market-Makers Hedging—High-Frequency Evidence

We provide high-frequency evidence that the intraday hedging of 0DTE exposures by market makers can explain the attenuation in the index volatility. The analysis reveals the following key intraday patterns. First, the variations in market makers’ 0DTE net gamma predict lower index volatility at high frequency, and that this effect dissipates after about one hour. Second, the intraday order flow of E-mini futures moves more strongly in the direction that dampens the index volatility when the option market makers carry a higher level of net gamma exposures. The response pattern of E-mini order flow to index returns also dissipates after one hour and matches the decrease in index volatility as the net gamma increases. These two sets of results consistently point to the intraday hedging activity of the market makers as the central mechanism that dampens the index volatility.

### 4.1. Intraday Hedging Needs and Volatility
We examine the impact of market makers’ hedging needs on the underlying index’s volatility at the intraday level using a panel regression. Each trading day represents a cross-section, and the time dimension corresponds to a 10-minute interval during the regular trading hours. The baseline panel regression is:
$$\sigma_{t+1} = a + b_1 \cdot \text{0DTE Net}\Gamma_t + b_2 \cdot \text{0DTE Net}\Delta_t + b_3 \cdot \text{Non-0DTE Net}\Gamma_t + b_4 \cdot \text{Non-0DTE Net}\Delta_t + \text{Controls} + \text{FE} + \epsilon_t \qquad (10)$$
where time $t$ is a 10-minute interval between 9:30 am when the market opens and 4:00 pm when the market closes. For simplicity, we drop the date subscript. The dependent variable $\sigma_{t+1}$ is the 10-minute volatility in the next interval. The 10-minute interval is the shortest interval for which the open-close option volume data are available. We use the shortest possible time interval in our analysis because it allows us to estimate the intraday impact of market makers’ hedging needs at the most granular level, which is likely relevant to 0DTE contracts. Also, it allows us to include several lags of control variables without dropping too many observations. For instance, the use of a lower frequency such as 30-minute and with 3 lags of control variables would limit the number of daily observations to 10 and excludes any observations prior to 11:00 am from the analysis.

The predictive variables of interest are the market makers’ net gamma ($\text{Net}\Gamma_t$) and net delta ($\text{Net}\Delta_t$) calculated using information available up to time $t$, separately for 0DTE and non-0DTE contracts. Recall that net gamma and net delta represent the fraction of underlying shares that market makers need to sell (buy) in order to hedge their pre-existing and new option exposures, respectively, against a one-percent increase (decrease) in the index price. Therefore, an increase in their values implies that the market makers need to hedge in the direction that would more strongly attenuate the index volatility. If this hedging mechanism is present at the intraday level, then we expect the coefficients $b_1$ through $b_4$ to be negative.

We include two lags of the dependent variable as control variables in every specification. The results are essentially unaffected when we include further lags of the dependent variable. We also include the following fixed effects in every specification. We include Date fixed effects to control for the average level of the index volatility on each day. We include $Year \times Day\text{-}of\text{-}the\text{-}Week$ fixed effects to control for the seasonality across weekdays within each year, and $Year \times Week \times Time$ fixed effects to control for the seasonality across 10-minute intervals within each week. This rich set of fixed effects focuses on identifying the impact of intraday variations in market makers’ hedging needs on the index volatility.[^15]

Table 6 reports results from the panel regression that we defined in Equation (10). Panel A reports results for the intraday volatility calculated using the cash index. Panel B reports results using the E-mini futures. The coefficient estimates of $\text{Net}\Gamma_t$ and $\text{Net}\Delta_t$ are negative in nearly all columns, which is consistent with the intraday hedging mechanism that we described. In Columns (1) and (4), we only include the net delta and net gamma from 0DTE contracts. The point estimate of $\text{0DTE Net}\Gamma_t$ is large and statistically significant. For instance, looking at Panel A, the coefficient estimates are $-0.798$ and $-0.513$, respectively. Multiplying these values with 0.684%, the sample standard deviation of $\text{Net}\Gamma_t$ for 0DTE reported in Table 3 provides an estimate of the hedging impact on the next-period volatility. That is, a one-standard-deviation increase in the net gamma from 0DTE contracts is associated with a 35–55 basis points decrease in annualized index volatility in the next period. By contrast, the coefficient estimates of $\text{0DTE Net}\Delta_t$ are economically small and have mixed statistical significance. We emphasize that these estimates cannot be directly compared against our two-stage least squares results in Table 5, which are not based on a panel regression and employ a different set of fixed effects.

In Columns (2) and (5), we examine the market makers’ hedging needs only from their non-0DTE contracts. The coefficient estimates of $\text{Non-0DTE Net}\Delta_t$ are nearly zero, similar to our finding for 0DTE contracts. The coefficient estimates of $\text{Non-0DTE Net}\Gamma_t$ are negative but statistically insignificant, and their magnitude is much smaller than those from 0DTE contracts. In Columns (3) and (6), we examine the impact of market makers’ hedging needs due to 0DTE and non-0DTE contracts in the same regression and the coefficient estimates are essentially unchanged. We note that our findings are robust to how we group longer-dated options into day-to-expiration categories which we report in Appendix Table ??. Overall, we find that the market makers’ net gamma from 0DTE options negatively predicts the intraday index volatility, while longer-dated options do not.

### 4.2. Hedging 0DTE versus non-0DTE Exposures
Ni et al. (2020) find that market makers’ net gamma from longer-dated options predicts the underlying assets’ volatility on the next day. However, our results in Table 6 show that the net gamma from non-0DTE does not predict intraday index volatility. We reconcile these results by showing that the relationship between the market makers’ hedging needs and the index volatility exists at different frequencies for 0DTE and non-0DTE contracts.

We estimate a regression model like Equation (10) but omitting the Date fixed effects that our baseline results included. We report the results in Table 7. The coefficient estimates of $\text{Net}\Gamma_t$ for non-0DTE and 0DTE hedging needs are both negative and statistically significant, but the precision of the estimates is lower for the non-0DTE contracts. The fact that these point estimates have similar magnitudes suggests that hedging by market makers on either type of exposure has a similar impact on volatility. We emphasize that the results in Tables 6–7 simply differ due to the inclusion or omission of the Date fixed effects, which help identify the intraday relationship between market makers’ net gamma and the index volatility. This suggests that while market makers may hedge 0DTE exposures throughout the day, they hedge their non-0DTE exposures at a lower frequency or at a specific time of day.

To test this hypothesis, we estimate the same regression model as in Equation (10), but including interaction terms between the 0DTE net gamma and non-0DTE net gamma with a set of dummy variables corresponding to each hour of the day. These interaction terms allow us to estimate how the net gamma exposures from 0DTE versus non-0DTE contracts predict the intraday volatility during the next interval at different times of the day. Figure 3 reports the coefficient estimates across hours of the day together with their 95 percent confidence interval.[^16] For 0DTE contracts, the estimates are all negative and statistically different from zero, consistent with our earlier results. There is some evidence that the point estimates are larger early in the day. By contrast, the coefficient estimates for non-0DTE contracts are small and not statistically different from zero until we reach the final hour of the day, at which point the coefficient estimates have a similar magnitude.

Our findings indicate that market makers frequently hedge their 0DTE exposures throughout the day, while they hedge their non-0DTE exposures near the end of the day before the market closes. We believe that this strategic approach would allow market makers to manage risks associated with their net gamma exposures more effectively, particularly when dealing with the greater volatility of 0DTE exposures relative to non-0DTE exposures. In fact, we find that intraday fluctuations in the market makers’ net gamma are 3-4 times larger for 0DTE exposures than for non-0DTE exposures; see Appendix Figure ??. The higher intraday variation in the 0DTE net gamma and the fact that 0DTE contract expires at the end of the day may incentivize market makers to hedge actively within the day. For non-0DTE contracts, it may be more cost-effective for market makers to hedge their net gamma exposures at a specific time of day due to their lower intraday variations, which supports the finding in Baltussen, Da, Lammers, and Martens (2021). Their study documents a significant impact of end-of-day hedging by option market makers which leads to a predictable intraday momentum in the last 30 minutes before the market closes.

The results in Figure 3 underscore a nuanced relationship between net gamma and volatility on different time scales. They also highlight the importance of considering both the intraday and daily effects when assessing the hedging impact associated with market makers’ hedging needs.

### 4.3. Intraday Hedging and Its Impact on Future Volatility
This section examines the intraday predictive power of the market makers’ 0DTE net gamma on the index volatility up to two hours ahead. We interpret the results as documenting both the speed and the persistence of market makers’ intraday hedging impact. Specifically, we ask how quickly their hedging needs predict a dampening effect on the index volatility and how long this predictive relationship lasts.

To do this, we estimate Equation (10) but with the 10-minute volatility $\sigma_{t+n}$ in future time intervals $n = 1, \dots, 12$, as the dependent variable. The independent variable of interest is the market makers’ net gamma from 0DTE options. We exclude other measures of hedging needs because their coefficient estimates are small and statistically insignificant; see e.g., Panel B of Table 6. Nevertheless, our findings are robust to including other measures of market makers’ hedging needs. We control for two lags of the dependent variable and a rich set of fixed effects, as before.

Figure 4 reports the coefficient estimates of $\text{0DTE Net}\Gamma_t$ and their confidence intervals. For brevity, we only report results from the regression model that uses the realized volatility measure as the dependent variable.[^17] These estimates represent the impact of market makers’ 0DTE net gamma on the index volatility in the future period $t + n$. The x-axis represents the time interval in minutes from the current period. For the next interval $n = 1$, the estimate is nearly the same as in Table 6. At the longer horizons $n > 1$, we find that the coefficient estimates smoothly decay and, after about an hour, they flatten near zero and become statistically insignificant. We can think of Figure 4 as an impulse response function of the index volatility to the market makers’ hedging needs. From this perspective, we find that market makers quickly hedge their 0DTE net gamma exposure, starting within 10 minutes and largely completing it in just over an hour.

The sum of the coefficients in the first hour is about $-2.27$. We interpret this sum as the cumulative effect of an intraday increase in 0DTE net gamma on the realized volatility. This cumulative intraday effect is quantitatively close to the two-stage least squares estimate in Column (4) of Table 5 which represents the total effect. If the effect of market makers’ net gamma on realized volatility scales approximately linearly through the day, we can multiply $-2.27$ with the increase in the 0DTE net gamma of 29 basis points on days with 0DTE trading (from Table 4). Doing so implies a reduction in the realized volatility of 65 basis points per year, which is very close in magnitude to the treatment effect of the variable *0DTE Trading* of about 60 basis points that we documented in Table 1. We argue that this consistency between the intraday cumulative effect and the treatment effect compellingly supports that market makers’ hedging activity is a key mechanism that dampens the index volatility on 0DTE trading days.

### 4.4. Intraday Hedging and Order Flow in the E-mini Futures
This section provides additional evidence that the attenuation in index volatility is due to market makers’ hedging activity by looking at the order flow in the E-mini futures market, a primary instrument used to hedge SPX options. In our framework, a positive net gamma indicates that the market makers need to sell the underlying index shares when the index level increases, and buy when it decreases. This hedging activity is in the direction opposite to the index price change, and thus, would dampen the index volatility. Therefore, at higher levels of net gamma market makers must trade more underlying shares in the direction opposite to the underlying index returns. We test this hypothesis by examining the intraday order flow of the E-mini futures.

The E-mini futures market is extremely liquid. Each trade is consummated at either the preceding bid or ask, which allows us to construct precise measures of order flows since we can classify a trade as buyer-initiated or seller-initiated nearly without errors. We calculate two measures of order flow at the 10-minute interval to match the frequency of the option open-close volume data. The first is the *Net Order Flow*, which is the net buy-minus-sell volume in the E-mini futures expressed as the fraction of the underlying index shares. It is calculated as the number of contracts bought minus the contracts sold over each interval, multiplied by 50, the number of shares of the underlying index that each contract represents, and then divided by $M$ the total number of equivalent underlying index shares. The second intraday order flow measure is the *%Order Imbalance*, which is calculated as the buy-minus-sell volume divided by the total volume during each interval.

Table 8 reports the estimation results with the *Net Order Flow* and *%Order Imbalance* in period $t + 1$ as the dependent variables. This regression model examines how order flow of the E-mini futures in the next interval responds to the return of the S&P 500 index in the current period, $Return_t$, and how this response strengthens when the market makers’ 0DTE net gamma is higher. For this purpose, we sort $\text{0DTE Net}\Gamma_t$ into quartiles from lowest to highest and create a dummy variable for each quartile, i.e., $Q1\text{-}\text{0DTE Net}\Gamma_t$ to $Q4\text{-}\text{0DTE Net}\Gamma_t$. We then interact these dummy variables with $Return_t$ during the same interval. The coefficient of the interaction terms estimates the average response of the E-mini order flow to the index return at different levels of market makers’ net gamma. We expect the coefficient estimate of the interaction terms to become more negative as the market makers’ net gamma increases, which would suggest that market makers trade E-mini futures more strongly in the direction against the index price movement.

As expected, Table 8 shows that the point estimates of the interaction terms become increasingly negative for higher quartiles of the market makers’ net gamma. We arrive at a qualitatively similar conclusion using either measure of the order flow. Looking at the *Net Order Flow* in Column (1), the coefficient estimates suggest that a one-percent increase in the S&P 500 index is associated with a 0.39 percentage points larger sell order—measured as total shares of the underlying index—in the E-mini futures when market makers’ net gamma is in the fourth quartile compared to that in the first quartile.

We find that the market makers’ net gamma at time $t$ is also predictive of the E-mini order flow beyond the next interval $t+1$. To show this, we estimate the same panel regression above but with the *Net Order Flow* in future intervals $t + n$ with $n = 1, \dots, 12$ as the dependent variable. We report the results in Figure 5. For the first interval $n = 1$, we recover the same estimates as in Table 8. Looking at future periods, we find that the coefficients remain negative and statistically significant until about one hour into the future.

We find a decaying pattern in how the E-mini order flow responds to the index return over the next hour. This pattern is very similar to the intraday predictive relationships of market makers’ net gamma on future index volatility that we documented in Figure 4. This similarity is telling because the negative response of the E-mini order flow to the index price change is the central mechanism in our framework by which the intraday hedging needs can dampen the volatility. We acknowledge that we cannot identify the originator of each E-mini futures trade and, therefore, the order flow that we observe could be due to investors other than the market makers of SPX options. However, these results suggest that option market makers actively trade in the E-mini futures market to hedge their net gamma exposures. This adds to the overall evidence that the market makers’ hedging needs can explain why 0DTE trading dampens the index volatility.

---

## 5. The Source of Market Makers’ Hedging Needs

This section examines the trading activity of market participants who trade on the other side of the market makers, and whose option positions led to a positive market makers’ 0DTE net gamma exposure. We find that market makers match the vast majority of buy and sell orders of SPX options throughout the day, but that they accumulate a relatively small share of this volume, resulting in a positive net gamma exposure over time. On net, the market makers absorb from *Customers* at-the-money straddle positions in non-0DTE options. These positions create a positive net gamma exposure that the market makers actively hedge when they become 0DTE in the direction that dampens the index volatility.

### 5.1. Trading Volume and Order Flows of End-users
We begin by examining the trading volume and order flow in 0DTE contracts by *Customers*, who are their primary end-users and account for more than 90% of the total 0DTE trading volume in recent years. For this analysis, we use data from May 19, 2022, until the end of our sample, when 0DTE options started to regularly trade every business day of the week. Figure 6 reports the daily average values across all business days during this period. Our conclusions are unaffected when using the full sample but averaging over days with 0DTE trading.

Panels A and B plot the cumulative 0DTE trading volume and order imbalance, respectively, for every distinct 2-hour interval of a trading day. The results are reported separately by moneyness buckets, and for put and call options.[^18] The moneyness of an option contract is calculated using its strike price divided by the index’s end-of-day closing price.

Panel A shows that *Customers* trade more than one million 0DTE contracts every day, on average. The trading volume grows gradually during the day, and it is concentrated on contracts that are at-the-money (ATM) or very near-the-money. At the end of the day, the majority of the 0DTE trading comes from contracts with moneyness within one percent of the index’s closing value. Panel B reports the cumulative OIB in 0DTE contracts of *Customers*. The magnitude of OIB is much smaller than that of the total volume in the corresponding moneyness bucket. This indicates that the market makers are able to match most of the buy and sell orders between end-users. The cumulative OIB has the smallest magnitude for ATM contracts despite the highest trading volume. This suggests that trading in the most active segment of the 0DTE market is relatively balanced throughout the day between end-users.

### 5.2. Net Open Interest and Net Gamma of End-users
We examine the net position, or equivalently the net open interest (NOI), in 0DTE contracts that *Customers* hold at each point in time on the day of expiration. Panel A of Figure 7 plots the net open interest of *Customers* in 0DTE contracts at different interval marks. As a group, they hold net short positions in ATM 0DTE puts and calls. In other words, they are a net seller of an ATM straddle which involves selling a call and a put at the same strike price. Importantly, Panel A illustrates that these end-users begin the day with a net short ATM straddle position and maintain this position throughout the day until their 0DTE contracts expire. Looking away from ATM contracts, we find that *Customers* as a group are net long in OTM puts and calls—i.e., they are a buyer of a strangle.

Overall, Panel A indicates that on the day of 0DTE expiration, *Customers* as a group hold a 0DTE strategy that combines selling ATM straddles and buying strangles. This combined strategy resembles an “iron butterfly.” We emphasize that this is an aggregation of all *Customers*’ positions in 0DTE options. Other strategies that could be consistent with Panel A include a long vertical call spread by some customers combined with a long vertical put spread by the others.

Panel B of Figure 7 examines the resulting net gamma of *Customers* from their 0DTE contracts. We find that the net gamma of end-users is negative throughout the day and largely because of their net short positions in ATM options. This finding is consistent with the fact that the gamma of an ATM option increases as the time to maturity decreases. On the other hand, for OTM options, their gamma approaches zero as the time to maturity decreases. For market clearing, the option positions held by the market makers are the opposite of the net holdings of all other participants. In the data, most of the negative net gamma of end-users is absorbed by the market makers. Appendix Figure ?? confirms this conjecture, where we plot the net gamma of MMs from 0DTE positions by moneyness and contract type for each year. In general, we find that the market makers’ net gamma is positive and relatively large around ATM contracts.

Overall, Figure 7 shows that the *Customers* net short position in ATM straddles is the reason for the large negative end-users’ net gamma from 0DTE. We importantly point out that this negative net gamma does not come from the trading of 0DTE contracts on expiration day, but from the net short ATM straddles established in longer-dated SPXW contracts before they become 0DTE. To see this, we focus on the NOI from ATM options in Panel A, which starts the day with a negative value and remains relatively stable until the market closes. This suggests that these ATM straddles were established before the market opens on the expiration day. This finding highlights an important feature of the 0DTE market. It shows that market makers play an important intermediary role in SPXW contracts not just on the expiration date but well before they become 0DTE. We discuss the hedging needs of market makers with respect to these new and previously established SPXW positions in the next section.

### 5.3. Market Makers’ Net Gamma from New and Old Positions
In this section, we confirm that the positive market makers’ 0DTE net gamma is not due to the trading of 0DTE contracts but, instead, due to the previously established positions in longer-dated SPXW contracts that become 0DTE on their expiration day. To see this, we decompose the market makers’ net gamma from 0DTE contracts into two components. We use the fact that the market makers’ net open interest for option contract $i$ at the interval mark $t \ge 9:40$ am can be written as:
$$\text{NOI}^{\text{MM}}_{i,t} = \text{NOI}^{\text{MM}}_{i,t=9:30} + \sum_{j=9:40}^{t} \text{OIB}^{\text{MM}}_{i,j} \qquad (11)$$
where $\text{NOI}^{\text{MM}}_{i,t=9:30}$ is the market makers’ net open interest at 9:30am at the start of the expiry day and $\sum_{j=9:40}^{t} \text{OIB}^{\text{MM}}_{i,j}$ is the cumulative order imbalance during that expiry day. The net gamma from “stale positions” represents the hedging needs due to positions that have been accumulated up to when the market opens on the day of expiration. Specifically, it is calculated using $\text{NOI}^{\text{MM}}_{i,t=9:30}$, holding this position fixed but updating the option gamma throughout the day until the contract expires. On the other hand, the net gamma from the “new positions” is calculated using the option gamma and $\sum_{j=9:40}^{t} \text{OIB}^{\text{MM}}_{i,j}$ at the current interval mark $t$, which represents the hedging needs due to new 0DTE positions during the expiration day.

Figure 8 plots the inter-quartile range and the average value of net gamma from both the stale and new positions. The results show that the average net gamma of market makers from new positions is relatively small throughout the day, with the inter-quartile range including zero. This is consistent with the fact, documented above, that market makers match nearly all of the buy and sell order flows with each other. However, their net gamma from stale positions is larger and positive from the start of the day until the market closes, showing that the market makers’ hedging needs due to their 0DTE exposures primarily come from SPXW positions that were established before these contracts became 0DTE.

### 5.4. The Impact of SPXW Expiration on Market Makers’ Hedging Needs
Our previous analysis shows that the positive 0DTE net gamma of market makers primarily comes from SPXW positions that were established before the expiration day. This suggests that the expiration of SPXW contracts affects the market makers’ hedging needs starting before the expiration date when these contracts become 0DTE. In this section, we leverage the variations in SPXW expiration days to estimate their treatment effect on the market makers’ net gamma starting on the day before SPXW contracts become 0DTE, and on the day that they are 0DTE.

The independent variable of interest is the dummy variable *0DTE trading* indicating that SPXW contracts that are set to expire on day $T$. The dependent variable is the net gamma of market makers in a 10-minute interval. We use data from January 2019 to May 19, 2022. The regression model shares the same set of fixed effects and controls as the model underlying Table 4. However, we estimate distinct coefficients for every hour of the expiration day $T$ and of the day before $T - 1$. Each coefficient estimate corresponds to the treatment effect of *0DTE Trading* on the market makers’ net gamma in each trading hour across both days, relative to a baseline day when there is no impending SPXW expiration.

Figure 9 plots the coefficient estimates of *0DTE trading*. We find that the market makers’ net gamma is higher throughout the day $T - 1$ before the SPXW contracts become 0DTE. In particular, the magnitude of this treatment effect is about one-third the size of the eventual increase in the market makers’ net gamma on the day of expiration. In addition, the overnight increase in the treatment effect of market makers’ net gamma mostly comes from the effect of time decay on the gamma of the ATM contracts as they approach the day that they become 0DTE. Therefore, the results show that market makers carry this increased net gamma exposure overnight until the expiration date. Figure 9 also shows that there is little intraday variation in the treatment effect on market makers’ net gamma.

The results in Figure 9 paint an important picture of how the shift in demand towards 0DTE trading impacts the way SPXW contracts are intermediated. This anticipatory trading—occurring before a SPXW contract becomes 0DTE—fundamentally affects market makers’ risk exposures and hedging strategies well before their actual expiration date. This anticipatory effect also helps explain why the exogenous but predictable variations in SPXW expiration dates that we exploit can generate the causal effect that we document in the first part of the paper.

---

## 6. Conclusion

The introduction of SPXW contracts that expire daily has led to significant growth in 0DTE trading but raised concerns that the trading of these ultra-short maturity options will increase the underlying index volatility. Contrary to these concerns, we provide evidence that 0DTE trading reduces the index volatility. We shed light on the economic mechanism behind this volatility attenuation, focusing on the role of option market makers. We show that 0DTE trading significantly increases the hedging needs of SPX options’ market makers. We show that these increased hedging needs require market makers to trade against the index price movements, thereby acting as a liquidity provider on the underlying index market and dampening the index volatility.

Using high-frequency data, we provide further evidence that the hedging of option market makers is the primary mechanism underlying the reduction in index volatility that we documented. We find that an increase in market makers’ hedging needs due to their 0DTE positions has a significant dampening effect on future volatility. This stabilizing effect lasts up to one hour and evidence from E-mini futures order flow corroborates this mechanism. We find that when market makers’ hedging needs from 0DTE positions increase, E-mini order flow responds more counter-cyclically to index return. The response pattern of the E-mini order flow is consistent with the pattern observed in the volatility attenuation; both effects decay over approximately one hour. The concordance between the horizon of hedging activity and volatility reduction provides compelling evidence that market makers’ hedging of 0DTE positions underlies the dampening effect of 0DTE trading on index volatility.

We trace the source of market makers’ 0DTE hedging needs by looking at end-user 0DTE trading demand. While daily 0DTE trading exceeds over one million contracts, we find that market makers match most of the intraday 0DTE order flows of across end-users, leaving their net exposure largely unchanged. However, their significant hedging needs stem from positions accumulated from prior trading days, particularly from end-users’ demand to short volatility using longer-dated at-the-money SPXW contracts. As these contracts approach expiration, their increasing gamma requires more active hedging, creating the counter-cyclical rebalancing in the E-mini order flow that we observe. This insight underscores the importance of studying the life-cycle of SPXW contracts in the context of 0DTE options. That is, to understand the full impact of the 0DTE trading requires that researchers examine how these contracts were traded well before they became 0DTE.

---

## References

*   Almeida, Caio, Gustavo Frieire, and Rodrigo Hizmeri, 2024, 0DTE asset pricing, *Working paper, Princeton University*.
*   Amaya, Diego, Pedro Angel Garcia-Ares, Neil Pearson, and Aurelio Vasquez, 2025, 0dte index options and market volatility: How large is their impact?, *Working paper, ITAM*.
*   Andersen, Torben G., and Oleg Bondarenko, 2015, Assessing measures of order flow toxicity and early warning signals for market turbulence, *Review of Finance* 19, 1–54.
*   Baltussen, Guido, Zhi Da, Sten Lammers, and Martin Martens, 2021, Hedging demand and market intraday momentum, *Journal of Financial Economics* 142, 377–403.
*   Bandi, Federico M., Nicola Fusari, and Roberto Reno, 2023, 0DTE option pricing, *Working paper, Johns Hopkins University*.
*   Bartholomew, Helen, 2024, Traders dredge 0DTE data for intraday gamma insights, *Risk*.
*   Beckmeyer, Heiner, Nicole Branger, and Leander Gayda, 2023, Retail traders love 0DTE options... but should they?, *Working paper, University of Munster*.
*   Branch, Ben, and Joseph E. Finnerty, 1981, The impact of option listing on the price and volume of the underlying stock, *Financial Review* 16, 1–15.
*   Brogaard, Jonathan, Jaehee Han, and Peter Y. Won, 2024, How does zero-day-to-expiry options trading affect the volatility of underlying assets?, *Working paper, University of Utah*.
*   Christensen, Kim, Roel C.A. Oomen, and Mark Podolskij, 2014, Fact or friction: Jumps at ultra high frequency, *Journal of Financial Economics* 114, 576–599.
*   Conrad, J., 1989, The price effect of option introduction, *The Journal of Finance* 44, 487–499.
*   Dim, Chukwuma, Bjorn Eraker, and Grigory Vilkov, 2025, 0DTEs: Trading, gamma risk and volatility propagation, *Working paper, George Washington University*.
*   Easley, David, Maureen O’Hara, and P.S. Srinivas, 1998, Option volume and stock prices: Evidence on where informed traders trade, *The Journal of Finance* 53, 431–465.
*   Hu, Jianfeng, Antonia Kirilova, Dmitriy Muravyev, and Doojin Ryu, 2024, Options market makers, *Working paper, Singapore Management University*.
*   Lipson, Marc Lars, Davide Tomio, and Jiang Zhang, 2023, A real cost of free trades: Retail option trading increases the volatility of underlying securities, *Working paper, Darden School of Business*.
*   Ni, Sophie, Neil D. Pearson, and Allen M. Poteshman, 2005, Stock price clustering on option expiration dates, *Journal of Financial Economics* 78, 49–87.
*   Ni, Sophie X, Neil D Pearson, Allen M Poteshman, and Joshua White, 2020, Does option trading have a pervasive impact on underlying stock prices?, *The Review of Financial Studies* 34, 1952–1986.
*   Pan, Jun, and Allen M. Poteshman, 2006, The Information in Option Volume for Future Stock Prices, *The Review of Financial Studies* 19, 871–908.
*   Saksena, Nitin, Matthew Welty, Juan Andres Serur, and Benjamin Bowler, 2023, The truth on 0DTE intraday gamma imbalances, *Bank of America Global Research Paper*.
*   Xu, Mandy, 2023, Much ado about 0DTEs: Separating fact from friction, *Technical report, Chicago Board of Options Exchange*.

---

## Footnotes

[^1]: The symbol root SPXW represents all SPX index options that are settled using the index’s closing value. These options have different strike prices and maturities, but all become 0DTE on their expiration day. Other SPX contracts expire on Friday morning and are settled using the index’s opening price.
[^2]: 0DTE trading occurs on all Mondays, Wednesdays, and Fridays starting in 2016. 0DTE trading also occurred occasionally on Tuesdays and Thursdays before 2022 due to variations in the weekday that end-of-quarter and end-of-month SPXW contracts would expire; or when a Monday, Wednesday or Friday fell on a holiday. These occasional expirations of SPXW on Tuesdays and Thursdays are plausibly exogenous variations that identify the treatment effect.
[^3]: Lipson, Tomio, and Zhang (2023) find that the retail demand for long-dated options can increase the underlying stock’s volatility through increased hedging activity of the option market makers.
[^4]: Bank of America’s strategist Nitin Saksena claimed that imbalance in the 0DTE options could lead to a flash crash of the stock market index (Bloomberg News’ interview, February 2023). Other related industry reports include columns from Xu (2023) and Saksena et al. (2023).
[^5]: An article by Bartholomew (2024) indicates that bank and practitioner research teams closely monitor 0DTE intraday gamma exposures of option market makers. Hu, Kirilova, Muravyev, and Ryu (2024) provide an alternative view of how market makers seldom delta-hedge long-dated Kospi 200 index options that trade on the Korea Exchange.
[^6]: An emerging and important asset pricing literature also focuses on 0DTE options. Bandi, Fusari, and Reno (2023) develop a pricing model that caters to ultra-short-term options; Almeida, Freire, and Hizmeri (2024) examine the risk premia in 0DTE prices and conclude that 0DTE options are mispriced.
[^7]: The trading volume of non-market makers can differ from the total exchange trading volume, which is one-half of the summed non-market makers’ and market makers’ volumes.
[^8]: See for example the CBOE 2021 calendar. For the year 2021, there were eleven days when a 0DTE contract traded either on a Tuesday or a Thursday. Four of these cases were due to the expiration of end-of-month SPX options.
[^9]: Tuesday-expiring SPXW was introduced on April 18, 2022, with the first expiration on April 26, 2022. Thursday-expiring SPXW was introduced on May 11, 2022, with the first expiration on May 19, 2022. Therefore, 0DTE with Tuesday and Thursday expirations officially began trading on April 26, 2022, and May 19, 2022, respectively.
[^10]: The opening cash-index value at 9:30 am is the average during the first 10 seconds after the cash market opened. This is not an issue for the futures value, since these contracts trade between Sunday 6 pm and Friday 5 pm Eastern time with a daily maintenance period between 5 and 6 pm.
[^11]: The number of Newey-West lags recommended based on a conventional rule of $4(T/100)^{2/9}$ with $T = 39$ is 3. The reported Newey-West standard errors of 5 lags is therefore slightly more conservative. In the Appendix Table ??, we demonstrate the robustness of our findings in Table 1 using different sets of fixed effects and standard-error calculations. Internet Appendix Section ?? shows that our main results hold when using bootstrap for inference and hypothesis testing.
[^12]: Rearranging Equation (2) for the option contract $i$ shows that:
    $$dn_{i,t+1} = - \left( dw_{i,t+1} \cdot \Delta_{i,t+1} \cdot \frac{S_{t+1}}{dS_{t+1}} \right) \cdot \frac{dS_{t+1}}{S_{t+1}} = - \left( \Delta_{i,t+1} \cdot \frac{dw_{i,t+1}}{R_{t+1}} \right) \cdot \frac{dS_{t+1}}{S_{t+1}}$$
    where we substituted $R_{t+1} \equiv \log\left(\frac{S_{t+1}}{S_t}\right)$ for $\frac{S_{t+1}}{dS_{t+1}}$ inside the bracket, which holds for an infinitesimally small time interval.
[^13]: Rearranging Equation (3) shows that:
    $$dq_{t+1} = -w_{i,t} \cdot S_{t+1} \cdot \left( \frac{\Delta_{i,t+1} - \Delta_{i,t}}{dS_{t+1}} \right) \cdot \frac{dS_{t+1}}{S_{t+1}} \approx - (w_{i,t} \cdot \Gamma_{i,t+1}S_{t+1}) \cdot \frac{dS_{t+1}}{S_{t+1}}$$
    where we apply the Ito’s lemma to approximate $\frac{d\Delta_{i,t+1}}{dS_{t+1}} \approx \frac{\partial \Delta_{i,t+1}}{\partial S_{t+1}} \equiv \Gamma_{i,t+1}$, which holds for a small time interval and after ignoring the change due to the second-order differential and the time decay.
[^14]: See Panel A of Table 3. The 0DTE net gamma is zero on days without 0DTE trading, by definition.
[^15]: Table ?? in the Appendix reports the time-series averages of the intraday correlations between key variables. In particular, we find a negative correlation between the volatility measures and the net gamma for both the 0DTE and non-0DTE contracts.
[^16]: An example of this regression is shown in Appendix Table ?? where the dependent variable is the 10-minute realized volatility of E-mini futures.
[^17]: We report the detailed regression results for the E-mini futures in Table ?? of the Appendix.
[^18]: SPX options trade almost around the clock due to all-electronic trading during the Global Trading Hours from 8:15 pm to 9:15 am. The cumulative volume and OIB is aggregated daily starting at the midnight of each business day.

---

## Figures and Visual Reconstructions

### Figure 1: Trading Demand for 0DTE

```
Panel A: Average Daily SPX Volume of Non-Market Makers (Stacked)
================================================================
   Contracts (Millions)
    3.0 |                                                                 [Red]
        |                                                                 [Red]
    2.0 |                                                   [Red]         [Blue]
        |                                     [Red]         [Blue]        [Blue]
    1.0 |                       [Blue]        [Blue]        [Blue]        [Blue]
        |  [Blue]  [Blue]  [Blue]  [Blue]  [Blue]  [Blue]  [Blue]  [Blue]  [Blue]
    0.0 -------------------------------------------------------------------------
           2012   2013   2014   2015   2016   2017   2018   2019   2020   2021   2022   2023
   Legend: [Red] 0DTE Volume, [Blue] Non-0DTE Volume

Panel B: Percentage Shares of Daily 0DTE Volume by Different Investors
=======================================================================
   Percent Share
    100% |=======================================================================| [Red]
         |                                                                       | [Blue]
     75% |                                                                       | [Blue]
         |                                                                       | [Blue]
     50% |                                                                       | [Blue]
         |                                                                       | [Blue]
     25% |               [Orange]                                                | [Blue]
         |[Orange][Orange][Orange][Orange]                                       | [Blue]
      0% -------------------------------------------------------------------------
           2012   2013   2014   2015   2016   2017   2018   2019   2020   2021   2022   2023
   Legend: [Red] Broker-Dealer, [Blue] Customer, [Orange] Firm Prop, [Purple] Professional Customer
```

#### Detailed Narrative Description
*   **Panel A: Average Daily SPX Volume of Non-Market Makers**
    *   **Structure:** A stacked bar chart showing the growth of average daily option volume from 2012 through 2023, broken down into **0DTE** (red segment on top) and **Non-0DTE** (blue segment at the bottom).
    *   **Axes:** The y-axis represents the *Number of Contracts* ranging from 0 to 3,000,000. The x-axis represents calendar years from 2012 to 2023.
    *   **Data Trends:** Total volume grows steadily from ~750,000 daily contracts in 2012 to over 3,000,000 in 2023. Prior to 2016, 0DTE volume (red) is negligible. Starting in 2016, with the introduction of Monday and Wednesday expiries, 0DTE volume begins to appear as a visible slice. In 2022 and 2023, 0DTE volume explodes, accounting for approximately half of all traded contracts (roughly 1.4 million out of 3.0 million contracts daily in 2023).
*   **Panel B: Percentage Shares of Daily 0DTE Volume by Different Investors**
    *   **Structure:** A stacked bar chart displaying the percentage breakdown of 0DTE trading volume by investor type.
    *   **Axes:** The y-axis represents the *Percent Share* from 0% to 100%. The x-axis represents calendar years from 2012 to 2023.
    *   **Categories:** The four investor groups are **Broker-Dealer** (red, top), **Customer** (blue, middle-large), **Firm Proprietary** (orange, middle-lower), and **Professional Customer** (purple, bottom).
    *   **Data Trends:** The **Customer** category (blue) represents the overwhelming majority of 0DTE trading. In 2012, Customers represented ~75% of the volume. This share grew continuously, exceeding **90%** of the daily 0DTE volume by 2023. In contrast, the share of **Firm Proprietary** (orange) has shrunk significantly from around 15–20% in 2013–2015 to less than 5% in 2023. **Professional Customers** (purple) and **Broker-Dealers** (red) remain very minor participants throughout the sample (each under 5%).

---

### Figure 2: 0DTE Trading Volume by Weekday

#### Detailed Narrative Description
*   **Structure:** A time-series chart divided into two panels tracking daily 0DTE contract volume from January 2019 through December 2023.
*   **Panels:**
    *   **Upper Panel (Monday, Wednesday, and Friday):** Shows a highly active, continuous line representing 0DTE trading volume on these three weekdays. The volume starts around 250,000 contracts in 2019 and exhibits a consistent upward exponential trend, reaching approximately 1,500,000 contracts by the end of 2023. Visible sharp downward spikes correspond to holidays (such as U.S. Independence Day and Thanksgiving) when the market closes early at 1:00 PM.
    *   **Lower Panel (Tuesday and Thursday):** Prior to late April 2022, 0DTE trading volume is almost entirely zero, with occasional isolated spikes representing quarter-end, month-end, or holiday exceptions when regular expirations fell on or were moved to a Tuesday or Thursday. Two vertical red lines indicate the official introductions: Tuesday-expiring SPXW on April 26, 2022, and Thursday-expiring SPXW on May 19, 2022. Immediately following these introductions, the daily volume on Tuesdays and Thursdays jumps to match the ~750,000 contract level of the other weekdays, thereafter merging into the same rising trend line that finishes near 1,500,000 contracts by late 2023.
*   **Implication:** The abrupt transition from zero to full-scale 0DTE trading on Tuesdays and Thursdays in Spring 2022 provides a clean, exogenous "treatment" effect for the econometric identification strategy.

---

### Figure 3: The Impact of Market Makers’ Hedging at Different Times of Day

#### Detailed Narrative Description
*   **Structure:** Two panels displaying OLS coefficient estimates and their 95% confidence intervals (error bars) across different hours of the trading day. The dependent variable is the next-period 10-minute realized volatility of either the S&P 500 Cash Index (orange dots/bars) or E-mini Futures (blue dots/bars).
*   **X-Axis (Time Intervals):** Broken down into six hourly buckets: `[9:30-11)`, `[11-12)`, `[12-13)`, `[13-14)`, `[14-15)`, and `[15-16)`.
*   **Y-Axis (Coefficient Value):** Ranges from -2.0 to +0.5.
*   **Panels:**
    *   **Panel A (Coefficient Estimate of 0DTE Net Gamma $\text{0DTE Net}\Gamma_t$):** For every single hourly interval throughout the day, the coefficient estimates for both Cash and Futures are negative and statistically significant (the 95% confidence intervals do not overlap the zero line). The coefficients are largest in magnitude during the first hour of trading (`[9:30-11)` is around -1.1) and decay slightly as the day progresses, but remain firmly negative (ranging between -0.5 and -0.8) and statistically significant.
    *   **Panel B (Coefficient Estimate of Non-0DTE Net Gamma $\text{Non-0DTE Net}\Gamma_t$):** In stark contrast to Panel A, the coefficients for non-0DTE contracts are extremely close to zero and statistically *insignificant* (error bars heavily overlap the zero line) for the first five intervals of the day. However, during the final hour of trading (`[15-16)`), the coefficient drops precipitously to around -0.6 for both Cash and Futures and becomes highly statistically significant.
*   **Implication:** Market makers hedge their highly sensitive 0DTE exposures dynamically and continuously throughout the entire trading day, which dampens volatility intraday. In contrast, they delay the hedging of their longer-dated (non-0DTE) exposures until the final hour of the trading day, leading to the concentrated end-of-day hedging effect documented in prior literature.

---

### Figure 4: Market Makers’ Net Gamma and Future-period Volatility

#### Detailed Narrative Description
*   **Structure:** An impulse-response style plot showing how the coefficient estimate of $\text{0DTE Net}\Gamma_t$ on future index realized volatility decays over time. The plot shows point estimates along with 95% confidence interval bands.
*   **Axes:**
    *   **X-axis:** Future time intervals from the current period $t$, expressed as 10-minute steps up to 2 hours: `(t, t+10]`, `(t+10, t+20]`, `(t+20, t+30]`, `(t+30, t+40]`, `(t+40, t+50]`, `(t+50, t+60]`, `(t+60, t+70]`, `(t+70, t+80]`, `(t+80, t+90]`, `(t+90, t+100]`, `(t+100, t+110]`, `(t+110, t+120]`.
    *   **Y-axis:** The coefficient estimate, ranging from -0.50 to +0.25.
*   **Data Trends:**
    *   For both Cash Index (orange) and E-mini Futures (blue), the initial impact in the first 10 minutes ($n=1$, interval `(t, t+10]`) is negative and significant at approximately -0.50.
    *   The dampening effect remains statistically significant and decays smoothly over the subsequent intervals: $n=2$ (`(t+10, t+20]`) is around -0.50, $n=3$ (`(t+20, t+30]`) is around -0.40, $n=4$ is -0.30, and $n=5$ is -0.30.
    *   At the 60-minute mark ($n=6$, interval `(t+50, t+60]`), the coefficient is around -0.25 but still significant.
    *   For horizons longer than one hour ($n \ge 7$, i.e., beyond 60 minutes), the coefficient estimates flatten out near zero and their 95% confidence intervals overlap the zero line, becoming statistically insignificant.
*   **Implication:** This represents an empirical impulse response showing that a shock to market makers' 0DTE net gamma has a rapid, stabilizing impact that dampens volatility immediately, with the entire hedging cycle completed in just over an hour.

---

### Figure 5: Market Makers’ Net Gamma and Order Flow of the E-mini Futures

#### Detailed Narrative Description
*   **Structure:** A multi-line plot showing the coefficient estimates of the interaction term $\text{Return}_t \times \text{Quartile of 0DTE Net}\Gamma_t$ on the future Net Order Flow of the E-mini futures at 10-minute intervals up to 120 minutes ahead.
*   **Axes:**
    *   **X-axis:** Future time intervals from $t$ in minutes (from 10 to 120 minutes).
    *   **Y-axis:** Coefficient of the interaction, ranging from -0.004 to +0.001.
*   **Color-Coded Quartiles of 0DTE Net Gamma:**
    *   **Q1 (lowest net gamma):** Pink line.
    *   **Q2 (second quartile):** Green line.
    *   **Q3 (third quartile):** Blue line.
    *   **Q4 (highest net gamma):** Purple line.
*   **Data Trends:**
    *   In the first interval `(t, t+10]`, all quartiles have negative coefficients, indicating that index returns are negatively related to subsequent E-mini order flow (hedging is counter-cyclical).
    *   Critically, the coefficients are highly ordered by net gamma quartile: **Q4** (purple) is by far the most negative at ~-0.004, followed by **Q3** (blue) at ~-0.003, **Q2** (green) at ~-0.0025, and **Q1** (pink) is the least negative at ~-0.002. This confirms that higher market maker net gamma triggers significantly stronger counter-cyclical hedging trades (selling futures when the index rises, buying when it falls).
    *   This gap between the quartiles decays smoothly over the hour. By the 60-minute mark (`(t+50, t+60]`), the lines converge and the differences become statistically and economically negligible, mirroring the decay of the volatility impact in Figure 4.
*   **Implication:** This provides direct high-frequency evidence of the physical transmission mechanism: market makers hedge their net gamma exposures by executing counter-cyclical trades in the highly liquid E-mini futures market, which physically dampens index volatility.

---

### Figure 6: Intraday Snapshots of End-users’ Volumes and Order Imbalance in 0DTE

#### Detailed Narrative Description
*   **Structure:** A side-by-side bar chart comparison across ten moneyness buckets, showing snapshots at four times of the trading day: 10:00 (lightest shade), 12:00 (medium-light), 14:00 (medium-dark), and 15:50 (darkest shade). Puts are represented in shades of blue; Calls are represented in shades of red.
*   **Moneyness Buckets (X-Axis):** Ranges from out-of-the-money (OTM) puts to OTM calls: `[0.95,0.96]`, `(0.96,0.97]`, `(0.97,0.98]`, `(0.98,0.99]`, `(0.99,1]` (At-the-Money, ATM Puts), `(1,1.01]` (ATM Calls), `(1.01,1.02]`, `(1.02,1.03]`, `(1.03,1.04]`, and `(1.04,1.05]`.
*   **Panels:**
    *   **Panel A (Daily Cumulative Volume of Customers in 0DTE):**
        *   **Y-axis:** Number of Contracts, ranging from 0 to 300,000.
        *   **Trends:** Cumulative trading volume grows steadily as the day progresses (reaching its peak at 15:50). The trading volume is highly concentrated in the near-the-money and at-the-money contracts. The two ATM buckets, `(0.99,1]` and `(1,1.01]`, dwarf all others, with cumulative volume for both puts and calls approaching **270,000–280,000 contracts** by 15:50. OTM buckets have very low cumulative volume (under 20,000 contracts).
    *   **Panel B (Daily Cumulative Order Imbalance (OIB) of Customers in 0DTE):**
        *   **Y-axis:** Number of Contracts, ranging from -3,000 to +6,000.
        *   **Trends:** In striking contrast to Panel A, the scale of OIB is tiny (capped at 6,000 contracts, which is less than **2%** of the total volume). For the highly active ATM contracts (`(0.99,1]` and `(1,1.01]`), the OIB is exceptionally close to zero and even slightly negative for puts at 15:50. The largest positive OIB (net customer buying) occurs in OTM calls (e.g., `(1.01,1.02]` has a cumulative OIB of ~6,000 contracts).
*   **Implication:** While customers trade millions of ATM contracts, their buy and sell orders are almost perfectly balanced, meaning market makers match most customer trades against other customers. The net risk absorbed by market makers *during* the expiration day from new 0DTE trades is therefore minimal.

---

### Figure 7: Intraday Snapshots of End-users’ Net Open Interest and Net Gamma in 0DTE

#### Detailed Narrative Description
*   **Structure:** A side-by-side bar chart comparison across the same ten moneyness buckets and using the same four-time snapshot and color scheme (reds for calls, blues for puts) as Figure 6.
*   **Panels:**
    *   **Panel A (Net Open Interest of Customers in 0DTE):**
        *   **Y-axis:** Number of Contracts, ranging from -2,000 to +4,000.
        *   **Trends:** At-the-money options (`(0.99,1]` and `(1,1.01]`) show large, persistent **negative** Net Open Interest (net short positions) for both puts and calls, hovering around -1,000 to -1,500 contracts throughout the entire day (already present at 10:00). In contrast, out-of-the-money options show **positive** Net Open Interest (net long positions), particularly in OTM puts (`(0.97,0.98]` and `(0.98,0.99]` are positive at +1,500 to +2,000) and OTM calls (`(1.01,1.02]` and `(1.02,1.03]` are positive at +2,500 to +3,500).
        *   **Interpretation:** This profile indicates that Customers, as a group, are net short ATM straddles (selling ATM puts and calls) and net long OTM strangles (buying OTM puts and calls). This combined position represents a net short **iron butterfly** strategy. These positions are already fully formed at the market open (10:00) and remain stable all day.
    *   **Panel B (Net Gamma of Customers in 0DTE):**
        *   **Y-axis:** Net Gamma, ranging from -0.003 to 0.000.
        *   **Trends:** Customer net gamma is negative across almost all buckets, but is extremely concentrated and large in the ATM buckets `(0.99,1]` and `(1,1.01]`, where it reaches **-0.002 to -0.0025** by the end of the day (15:50). This negative gamma is driven by the net short ATM positions, whose gamma naturally balloons as time-to-maturity approaches zero.
*   **Implication:** Because option contracts are in zero net supply, the market makers must hold the exact opposite position: they are **net long ATM straddles** and therefore hold a large, positive net gamma exposure that is concentrated at-the-money.

---

### Figure 8: Market Makers’ Net Gamma in 0DTE from Stale and New Positions

#### Detailed Narrative Description
*   **Structure:** A time-series plot comparing the intraday evolution of the two components of market makers’ 0DTE net gamma: **New Positions** (blue line) and **Stale Positions** (red line). Shaded areas represent the inter-quartile ranges.
*   **Axes:** The y-axis represents the *Net Gamma* value (ranging from -0.0050 to +0.0075). The x-axis tracks the time of day from 9:30 AM to 4:00 PM.
*   **Components:**
    *   **Stale Positions (Red Line):** Represents hedging needs arising from positions accumulated *before* the expiration day. The mean net gamma is highly positive from the market open (starting at ~0.0027), remains incredibly stable throughout the day, and rises slightly to ~0.0040 by 4:00 PM due to time decay. Crucially, the shaded inter-quartile range is entirely positive (ranging from +0.0010 to +0.0055), never crossing below the zero line.
    *   **New Positions (Blue Line):** Represents hedging needs arising from positions opened *on* the expiration day itself. The mean starts at exactly 0.0000 at 9:30 AM, slowly rises to ~0.0015, spikes to ~0.0035 around 3:30 PM, and falls back to ~0.0015 at market close. However, the shaded inter-quartile range is extremely wide and centered near zero (ranging from -0.0025 to +0.0025) for the vast majority of the day.
*   **Implication:** This decomposition proves that market makers' positive net gamma is not generated by intraday 0DTE trading. Instead, it is almost entirely driven by the "stale" positions—specifically, the long-dated option positions (such as short ATM straddles sold by customers days or weeks prior) that market makers carried overnight, which automatically become 0DTE contracts on the day of expiration.

---

### Figure 9: Market Makers’ Net Gamma on the Day Before and the Day of Expiration

#### Detailed Narrative Description
*   **Structure:** A comparison of the treatment effect of SPXW expiration on market makers' net gamma between the day before expiration (Day $T-1$, represented by teal dots/error bars in the left panel) and the day of expiration (Day $T$, represented by red dots/error bars in the right panel).
*   **Axes:** The y-axis represents the *Treatment Effect of Net Gamma* from 0.000 to 0.004. The x-axis shows the day and hourly intervals (Hour 10, Hour 12, Hour 14).
*   **Data Trends:**
    *   **Day T-1 (Teal):** The treatment effect is positive and statistically significant across all hours, hovering between **0.0010 and 0.0017**. This indicates that market makers' net gamma starts rising significantly the day *before* the contracts actually expire.
    *   **Day T (Red):** On the day of expiration, the treatment effect jumps dramatically, remaining highly positive and stable at **0.0025 to 0.0033** throughout the day.
    *   **Overnight Shift:** The transition from Day $T-1$ to Day $T$ shows an overnight increase in the treatment effect of about 2 to 3 times. This increase is driven mathematically by the time decay (theta) of the ATM options, which concentrates their gamma and increases market makers' hedging needs.
*   **Implication:** Market makers carry these massive, risk-sensitive positions overnight. The predictable time-decay of these pre-existing options drives the anticipatory hedging behavior that attenuates index volatility both on the day of expiration and the day before.

---

## Tables and Statistical Reconstructions

### Table 1: S&P500 Index Volatility on Days with and Without 0DTE Expiration

| Panel A. Cash Index | Abs Return (1) | Abs Return (2) | Abs Return (3) | Realized Vol (4) | Realized Vol (5) | Realized Vol (6) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **0DTE Trading** | -0.00672\*\*\* | -0.00851\*\* | -0.00862\*\* | -0.00486\*\*\* | -0.00624\*\* | -0.00599\*\* |
| *(t-statistic)* | (-4.8460) | (-2.7986) | (-2.8548) | (-4.5214) | (-2.6881) | (-2.6383) |
| **Observations** | 33,058 | 33,058 | 33,058 | 33,083 | 33,083 | 33,083 |
| **$R^2$** | 0.49362 | 0.49423 | 0.49510 | 0.74268 | 0.74354 | 0.74518 |
| **Within $R^2$** | 0.00121 | 0.00027 | 0.00027 | 0.00203 | 0.00046 | 0.00042 |

| Panel B. Futures | Abs Return (1) | Abs Return (2) | Abs Return (3) | Realized Vol (4) | Realized Vol (5) | Realized Vol (6) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **0DTE Trading** | -0.00600\*\*\* | -0.00806\*\* | -0.00826\*\*\* | -0.00442\*\*\* | -0.00540\*\* | -0.00524\*\* |
| *(t-statistic)* | (-4.1089) | (-2.6433) | (-2.7361) | (-3.8753) | (-2.2942) | (-2.2718) |
| **Observations** | 32,895 | 32,895 | 32,895 | 33,023 | 33,023 | 33,023 |
| **$R^2$** | 0.48411 | 0.48476 | 0.48559 | 0.73641 | 0.73730 | 0.73870 |
| **Within $R^2$** | 0.00083 | 0.00021 | 0.00022 | 0.00140 | 0.00030 | 0.00028 |

| Fixed Effects Grid | Column (1) | Column (2) | Column (3) | Column (4) | Column (5) | Column (6) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Year $\times$ Week $\times$ Time FE** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Day-of-week FE** | No | Yes | No | No | Yes | No |
| **Day-of-week $\times$ Year FE** | No | No | Yes | No | No | Yes |

> [!IMPORTANT]
> *   *T-statistics* are calculated using Newey-West standard errors with 5 lags and are reported in parentheses below the point estimates.
> *   Significance Codes: \*\*\*: 0.01, \*\*: 0.05, \*: 0.1
> *   All volatility measures are scaled to annualized percentage terms (assuming 252 trading days and 39 ten-minute intervals per day).

---

### Table 2: Introductions of SPXW with Tuesday/Thursday Expiration

| Variables | Panel A: Cash Index - Abs Return (1) | Panel A: Cash Index - Realized Vol (2) | Panel B: Futures - Abs Return (3) | Panel B: Futures - Realized Vol (4) |
| :--- | :---: | :---: | :---: | :---: |
| **Tuesday/Thursday** | 0.0066\*\*\* | 0.0047\*\*\* | 0.0065\*\*\* | 0.0048\*\*\* |
| | (4.732) | (4.319) | (4.137) | (3.950) |
| **Introduction** | -0.0124 | -0.0124 | -0.0129 | -0.0120 |
| | (-1.092) | (-1.313) | (-1.154) | (-1.302) |
| **Tuesday/Thursday $\times$ Introduction** | -0.0068\*\*\* | -0.0058\*\*\* | -0.0070\*\*\* | -0.0059\*\*\* |
| | (-3.252) | (-3.378) | (-3.054) | (-3.232) |
| **Observations** | 47,430 | 47,460 | 46,480 | 46,620 |
| **$R^2$** | 0.46593 | 0.70980 | 0.46751 | 0.71745 |
| **Within $R^2$** | 0.00099 | 0.00171 | 0.00092 | 0.00165 |
| **Year $\times$ Week $\times$ Time FE** | Yes | Yes | Yes | Yes |

> [!IMPORTANT]
> *   *T-statistics* are calculated using Newey-West standard errors with 5 lags and are reported in parentheses below the point estimates.
> *   Significance Codes: \*\*\*: 0.01, \*\*: 0.05, \*: 0.1

---

### Table 3: Summary Statistics of the Intraday Variables

#### Panel A. Sub-sample Period through May 19, 2022
| Variable | Mean | Stdev | Median | 25th Pctl | 75th Pctl | Nobs |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Abs Return (Cash)** | 9.404 | 12.855 | 5.529 | 2.399 | 11.616 | 33,019 |
| **Abs Return (Futures)** | 9.535 | 13.770 | 5.551 | 2.412 | 11.612 | 32,897 |
| **Realized Vol (Cash)** | 10.473 | 10.069 | 7.591 | 4.639 | 12.760 | 33,048 |
| **Realized Vol (Futures)** | 10.975 | 10.898 | 7.951 | 4.934 | 13.174 | 33,025 |
| **0DTE $\text{Net}\Delta_t$** | 0.019 | 2.766 | 0.000 | -0.010 | 0.110 | 33,989 |
| **Non-0DTE $\text{Net}\Delta_t$** | 0.054 | 3.976 | 0.049 | -0.224 | 0.350 | 33,084 |
| **0DTE $\text{Net}\Gamma_t$** | 0.261 | 0.532 | 0.002 | 0.000 | 0.430 | 33,989 |
| **Non-0DTE $\text{Net}\Gamma_t$** | 0.565 | 0.701 | 0.473 | 0.162 | 0.927 | 33,084 |

#### Panel B. Full Sample Period
| Variable | Mean | Stdev | Median | 25th Pctl | 75th Pctl | Nobs |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Abs Return (Cash)** | 9.469 | 11.966 | 5.904 | 2.565 | 12.033 | 48,795 |
| **Abs Return (Futures)** | 9.552 | 12.606 | 5.919 | 2.574 | 12.056 | 49,081 |
| **Realized Vol (Cash)** | 10.766 | 9.210 | 8.344 | 5.270 | 13.256 | 48,832 |
| **Realized Vol (Futures)** | 11.121 | 9.807 | 8.584 | 5.497 | 13.548 | 49,227 |
| **0DTE $\text{Net}\Delta_t$** | 0.057 | 3.745 | 0.000 | -0.055 | 0.238 | 50,195 |
| **Non-0DTE $\text{Net}\Delta_t$** | 0.051 | 4.113 | 0.049 | -0.224 | 0.348 | 48,867 |
| **0DTE $\text{Net}\Gamma_t$** | 0.323 | 0.684 | 0.095 | 0.000 | 0.516 | 50,195 |
| **Non-0DTE $\text{Net}\Gamma_t$** | 0.683 | 0.758 | 0.556 | 0.213 | 1.064 | 48,881 |

> [!NOTE]
> All variables in this table are expressed in percentage terms.

---

### Table 4: The Impact of 0DTE Market on Market Makers’ Net Delta and Net Gamma

#### Panel A. Market Makers' Net Gamma
| Variable | $\text{Net}\Gamma_t$ (1) | $\text{0DTE Net}\Gamma_t$ (2) | $\text{Non-0DTE Net}\Gamma_t$ (3) |
| :--- | :---: | :---: | :---: |
| **0DTE Trading** | 0.0020\*\*\* | 0.0029\*\*\* | -0.0009\*\*\* |
| | (6.6261) | (10.163) | (-5.4805) |
| **Observations** | 33,082 | 33,082 | 33,942 |
| **$R^2$** | 0.65858 | 0.67505 | 0.48661 |
| **Within $R^2$** | 0.00161 | 0.00433 | 0.01731 |

#### Panel B. Market Makers' Net Delta
| Variable | $\text{Net}\Delta_t$ (1) | $\text{0DTE Net}\Delta_t$ (2) | $\text{Non-0DTE Net}\Delta_t$ (3) |
| :--- | :---: | :---: | :---: |
| **0DTE Trading** | 0.001 | 0.0001 | 0.001 |
| | (1.1871) | (0.14795) | (1.0733) |
| **Observations** | 33,082 | 33,942 | 33,082 |
| **$R^2$** | 0.21744 | 0.20902 | 0.20838 |
| **Within $R^2$** | 0.00004 | 0.00000 | 0.00003 |

| Fixed Effects (Both Panels) | Column (1) | Column (2) | Column (3) |
| :--- | :---: | :---: | :---: |
| **Year $\times$ Week $\times$ Time FE** | Yes | Yes | Yes |
| **Year $\times$ Day-of-Week FE** | Yes | Yes | Yes |

> [!IMPORTANT]
> *   *T-statistics* are calculated using Newey-West standard errors with 5 lags and are reported in parentheses below the point estimates.
> *   Significance Codes: \*\*\*: 0.01, \*\*: 0.05, \*: 0.1

---

### Table 5: The Impact of Market Makers’ Hedging on Intraday Volatility: 2SLS

| Regressor | Panel A: $\text{Abs Return}(t+1)$ - Cash Index (1) | Panel A: $\text{Abs Return}(t+1)$ - Futures (2) | Panel B: $\text{Realized Vol}(t+1)$ - Cash Index (3) | Panel B: $\text{Realized Vol}(t+1)$ - Futures (4) |
| :--- | :---: | :---: | :---: | :---: |
| $\widehat{\text{Net}\Gamma}_t$ | -4.18\*\* | -4.31\*\* | -2.98\*\* | -2.94\*\* |
| | (-2.39) | (-2.16) | (-2.44) | (-2.09) |
| **Year $\times$ Week $\times$ Time FE** | Yes | Yes | Yes | Yes |
| **Year $\times$ Day-of-Week FE** | Yes | Yes | Yes | Yes |
| **Observations** | 32,210 | 31,244 | 32,234 | 31,364 |
| **$R^2$** | 0.47136 | 0.47266 | 0.73035 | 0.74047 |

> [!IMPORTANT]
> *   $\widehat{\text{Net}\Gamma}_t$ is the instrumented net gamma of market makers due to positions across all SPX options in the current period $t$. The first-stage regression uses *0DTE Trading* as the instrument and corresponds to Column (1) in Panel A of Table 4.
> *   *T-statistics* are calculated using Newey-West standard errors with 5 lags and are reported in parentheses below the point estimates.
> *   Significance Codes: \*\*\*: 0.01, \*\*: 0.05, \*: 0.1

---

### Table 6: Market Makers’ Hedging and the Intraday Market Volatility

#### Panel A. S&P 500 Cash Index
| Variables | Abs Return (1) | Abs Return (2) | Abs Return (3) | Realized Vol (4) | Realized Vol (5) | Realized Vol (6) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **$\text{0DTE Net}\Gamma_t$** | -0.7980\*\*\* | | -0.7946\*\*\* | -0.5133\*\*\* | | -0.5121\*\*\* |
| | (-5.704) | | (-5.686) | (-8.480) | | (-8.468) |
| **$\text{0DTE Net}\Delta_t$** | -0.0198\*\* | | -0.0229\*\* | -0.0079 | | -0.0088\* |
| | (-2.289) | | (-2.448) | (-1.563) | | (-1.856) |
| **$\text{Non-0DTE Net}\Gamma_t$** | | -0.1733 | -0.1605 | | -0.0770 | -0.0702 |
| | | (-0.8469) | (-0.8078) | | (-0.9629) | (-0.9085) |
| **$\text{Non-0DTE Net}\Delta_t$** | | 0.0033 | -0.0065 | | 0.0020 | -0.0019 |
| | | (0.4294) | (-0.7808) | | (0.4402) | (-0.4512) |
| **$\text{Dependent Var}_t$** | 0.0175 | 0.0179 | 0.0175 | 0.2703\*\*\* | 0.2718\*\*\* | 0.2703\*\*\* |
| | (1.477) | (1.514) | (1.474) | (17.89) | (18.04) | (17.88) |
| **$\text{Dependent Var}_{t-1}$** | 0.0302\*\* | 0.0306\*\* | 0.0301\*\* | 0.1628\*\*\* | 0.1642\*\*\* | 0.1627\*\*\* |
| | (2.314) | (2.351) | (2.308) | (11.61) | (11.72) | (11.60) |
| **Observations** | 46,261 | 46,261 | 46,261 | 46,313 | 46,313 | 46,313 |
| **$R^2$** | 0.51651 | 0.51625 | 0.51653 | 0.81796 | 0.81779 | 0.81797 |
| **Within $R^2$** | 0.00184 | 0.00131 | 0.00188 | 0.13060 | 0.12977 | 0.13063 |

#### Panel B. S&P 500 E-mini Futures
| Variables | Abs Return (1) | Abs Return (2) | Abs Return (3) | Realized Vol (4) | Realized Vol (5) | Realized Vol (6) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **$\text{0DTE Net}\Gamma_t$** | -0.8337\*\*\* | | -0.8251\*\*\* | -0.5399\*\*\* | | -0.5390\*\*\* |
| | (-5.944) | | (-5.887) | (-8.788) | | (-8.793) |
| **$\text{0DTE Net}\Delta_t$** | -0.0211\*\* | | -0.0256\*\* | -0.0056 | | -0.0061 |
| | (-2.407) | | (-2.704) | (-1.212) | | (-1.372) |
| **$\text{Non-0DTE Net}\Gamma_t$** | | -0.2054 | -0.1919 | | -0.0868 | -0.0792 |
| | | (-0.9045) | (-0.8688) | | (-0.9860) | (-0.9325) |
| **$\text{Non-0DTE Net}\Delta_t$** | | 0.0011 | -0.0096 | | 0.0015 | -0.0012 |
| | | (0.1445) | (-1.104) | | (0.3561) | (-0.2945) |
| **$\text{Dependent Var}_t$** | 0.0162 | 0.0167 | 0.0162 | 0.2870\*\*\* | 0.2886\*\*\* | 0.2870\*\*\* |
| | (1.357) | (1.395) | (1.356) | (17.41) | (17.53) | (17.40) |
| **$\text{Dependent Var}_{t-1}$** | 0.0157 | 0.0162 | 0.0156 | 0.1353\*\*\* | 0.1366\*\*\* | 0.1352\*\*\* |
| | (1.084) | (1.115) | (1.080) | (7.893) | (7.944) | (7.885) |
| **Observations** | 46,576 | 46,562 | 46,562 | 46,675 | 46,661 | 46,661 |
| **$R^2$** | 0.51550 | 0.51525 | 0.51554 | 0.82618 | 0.82603 | 0.82620 |
| **Within $R^2$** | 0.00119 | 0.00064 | 0.00125 | 0.13179 | 0.13098 | 0.13186 |

| Fixed Effects (Both Panels) | Column (1) | Column (2) | Column (3) | Column (4) | Column (5) | Column (6) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Date FE** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Year $\times$ Week $\times$ Time FE** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Year $\times$ Day-of-week FE** | Yes | Yes | Yes | Yes | Yes | Yes |

> [!IMPORTANT]
> *   *T-statistics* are calculated using Newey-West standard errors with 5 lags and are reported in parentheses below the point estimates.
> *   Significance Codes: \*\*\*: 0.01, \*\*: 0.05, \*: 0.1

---

### Table 7: Market Makers’ Hedging and the Intraday Volatility: No Date Fixed Effects

| Variables | Panel A: Cash Index - Abs Ret (t+1) (1) | Panel A: Cash Index - Realized Vol (t+1) (2) | Panel B: Futures - Abs Ret (t+1) (3) | Panel B: Futures - Realized Vol (t+1) (4) |
| :--- | :---: | :---: | :---: | :---: |
| **$\text{0DTE Net}\Gamma_t$** | -0.6086\*\*\* | -0.3220\*\*\* | -0.6681\*\*\* | -0.3595\*\*\* |
| | (-7.734) | (-9.676) | (-8.093) | (-9.565) |
| **$\text{0DTE Net}\Delta_t$** | -0.0252\*\* | -0.0089\* | -0.0267\*\*\* | -0.0067 |
| | (-2.598) | (-2.004) | (-2.721) | (-1.574) |
| **$\text{Non-0DTE Net}\Gamma_t$** | -0.7314\*\* | -0.2956\*\* | -0.7589\*\* | -0.3178\*\* |
| | (-2.316) | (-2.391) | (-2.316) | (-2.412) |
| **$\text{Non-0DTE Net}\Delta_t$** | -0.0118 | -0.0024 | -0.0140 | -0.0025 |
| | (-1.404) | (-0.5825) | (-1.602) | (-0.5705) |
| **Observations** | 46,261 | 46,313 | 46,562 | 46,661 |
| **$R^2$** | 0.47374 | 0.80012 | 0.47231 | 0.80817 |
| **Within $R^2$** | 0.03114 | 0.33434 | 0.02622 | 0.33248 |
| **Date FE** | **No** | **No** | **No** | **No** |
| **Year $\times$ Week $\times$ Time FE** | Yes | Yes | Yes | Yes |
| **Year $\times$ Day-of-week FE** | Yes | Yes | Yes | Yes |
| **Lags of Dependent Var** | Yes | Yes | Yes | Yes |

> [!IMPORTANT]
> *   *T-statistics* are calculated using Newey-West standard errors with 5 lags and are reported in parentheses below the point estimates.
> *   Significance Codes: \*\*\*: 0.01, \*\*: 0.05, \*: 0.1

---

### Table 8: Market Makers’ Net Gamma and Order Flow in the Futures Market

| Variables | E-mini Futures: Net Order Flow (t+1) (1) | E-mini Futures: % Order Imbalance (t+1) (2) |
| :--- | :---: | :---: |
| **$\text{Return}_t \times \text{Q1-0DTE Net}\Gamma_t$** | -0.0022\*\*\* | -6.135\*\*\* |
| | (-6.092) | (-11.44) |
| **$\text{Return}_t \times \text{Q2-0DTE Net}\Gamma_t$** | -0.0025\*\*\* | -5.120\*\*\* |
| | (-8.477) | (-11.05) |
| **$\text{Return}_t \times \text{Q3-0DTE Net}\Gamma_t$** | -0.0033\*\*\* | -8.262\*\*\* |
| | (-9.712) | (-13.16) |
| **$\text{Return}_t \times \text{Q4-0DTE Net}\Gamma_t$** | -0.0061\*\*\* | -12.95\*\*\* |
| | (-6.345) | (-9.385) |
| **Date FE** | Yes | Yes |
| **Year $\times$ Week $\times$ Time FE** | Yes | Yes |
| **Year $\times$ Day-of-week FE** | Yes | Yes |
| **Lags of Dependent Variable** | Yes | Yes |
| **Observations** | 46,711 | 46,711 |
| **$R^2$** | 0.71786 | 0.43955 |
| **Within $R^2$** | 0.20926 | 0.24060 |

> [!IMPORTANT]
> *   $\text{Return}_t$ is the log return of the S&P 500 cash index in the 10-minute interval $t$.
> *   *T-statistics* are calculated using Newey-West standard errors with 5 lags and are reported in parentheses below the point estimates.
> *   Significance Codes: \*\*\*: 0.01, \*\*: 0.05, \*: 0.1
