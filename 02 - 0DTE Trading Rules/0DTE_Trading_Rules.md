
## 0 DTE Trading Rules

Grigory Vilkov∗

March 18, 2026

### Abstract

We study realized payoffs of S&P500 zero-days-to-expiration (0DTE) options and standard multi-leg structures from 09/2016 to February 2, 2026. A positive 0DTE variance risk premium exists, but at same-day horizons its economic magnitude is small and difficult to monetize after realistic frictions. Across individual options and strategy templates, net PNL distributions are wide, state-dependent, and dominated by tail risk rather than by stable mean carry. Ex-post strategy PNL loads more on directional and skewness realizations than on realized variance alone. At the same time, disciplined 10:00 ET conditional rules estimated under a strict out-of-sample protocol deliver economically meaningful net performance for selected strategies and diversified baskets. The evidence, therefore, points to selective timing opportunities rather than to a broad unconditional edge.

Keywords: 0DTE, ultra-short options, variance risk premium, volatility trading, option strate- gies, option trading

∗Frankfurt School of Finance & Management; E-mail: vilkov@vilkov.net; Website: www.vilkov.net.

## 1 Introduction

Trading in zero-days-to-expiration options has become one of the most visible recent develop- ments in the U.S. index-option market. This growth raises two natural questions. The first

is descriptive: what do implementable 0DTE S&P500 (option root SPXW) positions actually earn once payoffs are marked consistently, scaled comparably across strikes, and adjusted for

execution frictions? The second is conditional: if these payoffs are strongly state-dependent, can that variation be converted into real-time trading rules rather than into ex-post stories?

We study these questions using SPXW 0DTE calls, puts, and standard multi-leg structures over 09/2016 to February 2, 2026. The main text focuses on positions opened at 10:00 ET

and held to the 16:00 ET close; the Appendix reports analogous evidence for entries at 16:00

ET on the previous day and at 13:00 ET and 15:00 ET on the same day. At each entry time, we interpolate the observed 0DTE cross-section over moneyness from 0.98 to 1.02 in steps of

0.001 and use these standardized instruments to construct comparable option- and strategy-level payoffs. The strategy set covers straddles and strangles, iron butterflies and iron condors, bull

call and bear put spreads, call and put ratio spreads, and risk reversals.

Three findings stand out. First, a positive 0DTE variance risk premium exists, but at same- day horizons its economic magnitude is small. Second, strategy-level payoff distributions are

wide, tail-heavy, and unstable across regimes; for many structures, downside risk is large relative to average carry. Third, conditional timing works better when formulated as directional classi-

fication than when posed as direct return prediction. In the conditional out-of-sample (OOS) implementation, put ratio spreads reach a net Sharpe ratio of 1.26, iron butterfly structures

reach 0.82, and diversified equal-weight baskets reach net Sharpe ratios between 1.01 and 1.27.

We contribute to several adjacent strands of research. Relative to the emerging 0DTE market-impact literature, including the merged draft of Adams, Dim, Eraker, Fontaine, Orn-

thanalai, and Vilkov 20251 and the related evidence in Brogaard, Han, and Won 2026, Amaya,

Garcia-Ares, Pearson, and Vasquez 2025, our object is not the causal effect of dealer hedging on aggregate volatility, but the realized payoff distribution of standardized strategy templates un-

der implementable construction rules. Relative to the ultra-short option-pricing literature (e.g.,

Bandi, Fusari, and Ren`o 2023, Almeida, Freire, and Hizmeri 2025), we take a reduced-form route and document how feasible 0DTE strategy PNL maps into implied and realized moments.

Relative to the broader short-dated option-return literature (e.g., Beckmeyer, Branger, and

Gayda 2023, Bryzgalova, Pavlova, and Sikorskaya 2023, Bogousslavsky and Muravyev 2025), our evidence supports the view that gross option stories weaken materially once one accounts

for execution costs and tail risk. Finally, relative to the option-return and event-state litera- ture (e.g., B¨uchner and Kelly 2022, Londono and Samadi 2023, Knox, Londono, Samadi, and

Vissing-Jorgensen 2025), we study unhedged same-day strategy payoffs, restrict predictors to information available by 10:00 ET, and impose a strict out-of-sample protocol for conditional

rules.

The rest of the paper proceeds as follows. Section 2 describes the data and the construction of the option-, strategy-, and state variables used throughout. Section 3 documents unconditional

payoffs of individual options and strategy templates. Section 4 links strategy PNL to implied and realized moments and tightens inference for these links. Section 5 studies conditional trading

rules. Section 6 concludes. Appendix A contains supporting tables and figures.

## 2 Data and Variable Construction

Data on Options and Underlying Markets. This section describes the data sources and the construction choices used throughout the paper. We use Cboe 30-minute option bars with

1The 2025 merged draft consolidates and extends two predecessor papers, Adams, Fontaine, and Ornthanalai 2025 and Dim, Eraker, and Vilkov 2024.

NBBO quotes and sizes, OHLC prices, trade volume, and underlying levels, focusing on SPX

Weeklys (root SPXW). These contracts are European and cash settled against the SPX close at 16:00 ET. The sample runs from 09/2016 to February 2, 2026. SPXW had three weekly

expirations from late August 2016; two additional weekdays were introduced on April 18, 2022 and May 11, 2022, giving daily weekday 0DTE expirations. For underlying prices and realized-

moment construction, we use ThetaData one-minute bars (SPX and VIX where needed) and

ThetaData daily closes.

Implied and Realized Moment Measures. We compute implied variance (IV ) to expi- ration at each intraday bar-end t on expiration day using the VIX methodology Cboe (2023)

applied to SPXW 0DTE options. The conditioning variable at 10:00 ET is IV10:00, i.e., integrated implied variance from 10:00 ET to 16:00 ET:

∆Ki

IVt = 2erT X

$$K2 i Q(Ki) −[F/K0 −1]2, \qquad (1)$$

i where Ki is strike, K0 is the first strike at or immediately below option-implied forward F,

Q(Ki) is the OTM mid quote (i ̸= 0), Q(K0) is the average of call and put quotes at K0, r is the risk-free rate (1-month Treasury bill from FRED), and T is time to expiration in years.

$$We also define up and down semivariances, IV up t and IV dn t , by applying \qquad (2)$$

to weakly OTM calls and puts, respectively, and scaling the subtracted term to 0.5[F/K0 −1]2 so that the two

components sum to total IVt. The difference between up and down semivariance is a common implied-skewness proxy (e.g., Feunou, Jahan-Parvar, and Okou (2018), Kilic and Shaliastovich

(2019)), and we use: 2

$$ISt = IV up t −IV dn t . \qquad (2)$$

2Implied skewness can also be computed directly (e.g., Bakshi, Kapadia, and Madan (2003), Kozhan, Neu- berger, and Schneider (2013)). We use the semivariance-difference proxy because it is simple under both risk- neutral and physical measures and maps naturally to skewness-premium definitions.

We compute forward-looking realized variance (RV ) at the end of each bar t for periods matching each computed IV as the sum of squared one-minute log returns from the end of a bar to the

end of the day:

$$T−1 X t r2 t,t + 1, \qquad (3)$$

RVt = where rt,t+1 is the one-minute close-to-close log return from minute t to t + 1, summed through

T=16:00 on the same day. Analogous to implied semivariances, realized semivariances RV up t and

$$RV dn t are computed by multiplying each r2 t,t + 1 term in \qquad (3)$$

by 1rt,t+1>0 or 1rt,t+1<0, respectively.

We define realized skewness proxy as

$$RSt = RV up t −RV dn t . \qquad (4)$$

We define ex post variance risk premium V RP at bar t as the payoff on a short variance swap from t to expiration, i.e., implied minus realized variance over that window:

$$V RPt = IVt −RVt. \qquad (5)$$

Semivariance premia V RP up t and V RP dn t are defined analogously.3 Skewness premium is then defined in two equivalent ways:

$$SRPt = ISt −RSt = V RP up t −V RP dn t . \qquad (6)$$

For options expiring the same day, observed at an intraday time (for example 10:00 ET), we compute moneyness as strike divided by spot and retain options in [0.98, 1.02] (within ±2% of

ATM). We scale mid prices and bid-ask spreads by spot, then interpolate key variables (mid, spread, implied volatility, Greeks, and leg-level flow/liquidity inputs used later) over moneyness

## 3 We do not annualize these quantities; the goal is to keep magnitudes in realized same-day payoff units.

with step 0.001, separately for calls and puts.4 For each interpolated option, we compute the payoff:

   

(ST /St −M)+ if Type = Call,

Payofft(M, Type) =

$$(M −ST /St) + if Type = Put, \qquad (7)$$

   where M is moneyness and ST /St is gross index return from t to T=16:00. For each option we also compute intrinsic value (immediate-exercise payoff) and time value (mid minus intrinsic).

If time value is negative because of mid-quote noise, we set time value to zero and intrinsic value to mid. Since moneyness is strike scaled by spot, payoff, intrinsic, and time value are already in

spot-relative units. Option PNL relative to spot is:

$$PNLt(M, Type) = Payofft(M, Type) −Midt(M, Type), \qquad (8)$$

where Midt(M, Type) is the mid price at time t for option (M, Type). Realized return to expiration is:

Midt(M, Type) = Payofft(M, Type)

Rett(M, Type) = PNLt(M, Type)

Midt(M, Type) −1. (9)

We report both PNL and return in percentage terms (multiply by 100). For multi-leg structures, strategy PNL is the signed sum of leg-level PNL weighted by leg quantities; by construction it

remains in spot-relative units.

Construction of Conditional Features at 10:00 ET. For the conditional model section, we use the same SPXW option pipeline and then construct additional predictors at the strategy

level. In preprocessing, we keep same-day-expiry SPXW quotes for intraday bars and include

4At SPX= 4000, step 0.001 corresponds to roughly 4 index points. Interpolation standardizes moneyness across dates and enables direct strategy construction. We use one-dimensional piecewise cubic interpolation (Akima 1970), with similar results under alternative interpolation schemes. Interpolation is cross-sectional in moneyness at a fixed date/time and option type; we do not interpolate across time.

next-day-expiry contracts only at 16:00 ET for close-to-close alignment in intermediate steps;

the conditional models themselves use the 10:00 ET cross-section of same-day-expiry strategy observations only. Calls and puts are processed separately: interpolation is run within op-

tion type on the moneyness grid M ∈{0.98, 0.981, . . . , 1.02}, and strategy legs are matched by (datetime, option type, moneyness). In short, option-leg predictors are taken from this in-

terpolated 10:00 ET grid, while market controls and lagged realized variables are taken from non-interpolated underlying time series.

Let i = (s, m, t) index strategy type s, moneyness configuration m, and date-time t (here, t = 10:00 ET), and let Ls,m denote legs in that structure, with signed leg quantity ql (ql > 0

long, ql < 0 short). For each leg l, we collect the option inputs basl, midl, ∆l, Γl, νl, V oll,

OIl, BidSzl, AskSzl, and the active underlying level Sl. If multiple rows map to the same

(datetime, option type, moneyness) key, we aggregate by variable type before leg construction:

price and Greek variables (bas, mid, ∆, Γ, ν, S, OI) are averaged, while traded and displayed depth variables (V ol, BidSz, AskSz) are summed. For compactness, we denote half-spread by

h, displayed depth by d, relative spread by ρ, traded volume by v, flow notional by f, and gamma exposure by g.

We then define leg-level flow, gamma-exposure, and liquidity building blocks. In our notation,

(h, d, ρ) are liquidity features. They proxy execution cost, displayed depth, and relative tightness of quoted markets at the entry time:

hi,l = |ql| · basl

2 , (10) di,l = |ql| · (BidSzl + AskSzl), (11) ρi,l = |ql| · basl

|midl|. (12)

The variables (v, f∆, fΓ, fν) are flow features: they measure how much contract volume, delta notional, gamma notional, and vega notional trade through the strikes used by the strategy:

$$vi,l = |ql|  \cdot  V oll, \qquad (13)$$

f∆ i,l = |ql| · V oll · |∆l| · 100 · Sl, (14) fΓ i,l = |ql| · V oll · |Γl| · 100 · S2 l , (15) fν i,l = |ql| · V oll · |νl| · 100. (16)

The variables (gOI,n, gOI,a, gΓ,n, gΓ,a) are GEX-style features. They summarize signed and abso- lute convexity exposure, either weighted by open interest or coming directly from the strategy-leg

mix:

$$gOI,n i,l = ql  \cdot  OIl  \cdot  Γl  \cdot  100  \cdot  S2 l , \qquad (17)$$

gOI,a i,l = |ql| · OIl · |Γl| · 100 · S2 l , (18) gΓ,n i,l = ql · Γl, (19) gΓ,a i,l = |ql| · |Γl|. (20)

We derive these three families separately because they capture distinct economic channels: im- plementation frictions, current trading pressure, and concentration of convexity.

The leg-level liquidity, flow, and GEX features defined above are aggregated to the strategy level by summing over all legs in the strategy at 10:00 ET. In the current conditional models

we use same-day-expiry contracts only at 10:00 ET; next-day-expiry contracts are used only for

16:00 ET alignment in preprocessing. We additionally use transformed ratios:

$$BΓ i = gOI,n i |gOI,a i | + 1 , \qquad (21)$$

$$RΓ i = fΓ i |gOI,a i | + 1 , \qquad (22)$$

$$Ti = hi di + 1. \qquad (23)$$

These transformed indicators remain in the same three families: BΓ is a normalized GEX balance measure, RΓ is a flow-pressure measure scaled by the local GEX base, and T is a

liquidity tightness measure. We derive them because raw flow and raw GEX are strongly scale- dependent across strategies, strike widths, and premium sizes. These are flow-style and exposure-

style proxies based on traded volume, open interest, and leg Greeks; they are not a dealer- inventory reconstruction. If a strategy observation has incomplete leg coverage at 10:00 ET,

we set the engineered leg-aggregated features to missing. For specifications that use date-wise cross-sectional scaling, each strategy-level predictor Xi,t is transformed as

Nt X

$$XCS i,t = Xi,t −Xt stdt(X) , Xt = 1 i = 1 Xi,t, \qquad (24)$$

Nt where Nt is the number of strategy observations at date t.

Baseline strategy-level predictors include time value, mid-price, ∆, Γ, ν, moneyness-center, and lagged PNL terms. For a structure with leg moneyness values {Ml}l∈Ls,m, we define

Mi,t = 1 |Ls,m|

$$X l∈Ls,m Ml. \qquad (25)$$

Lagged PNL features are

## 5 X

P (1) i,t = PNLi,t−1, ¯P (5) i,t = 1 j=1 PNLi,t−j, σ(5) P,i,t = sd(PNLi,t−1, . . . , PNLi,t−5), (26)

5

computed within each (strategy, moneyness) series. We also include strategy fixed identifiers as one-hot dummies Ds,i ∈{0, 1}. Market-state controls at 10:00 ET are

$$IVt = 105  \cdot  V IX (SPXW,0DTE,10:00) t , \qquad (27)$$

ISt = 105 · 

 , (28)

V IXup(SPXW,0DTE,10:00) t −V IXdn(SPXW,0DTE,10:00) t plus slope proxies (slope upt, slope dnt) and one-day-lagged realized SPX moments, namely lagged realized returns, variance, and skewness, where the lag enforces strict no-look-ahead con-

struction. These variables form the remaining two families. The baseline family consists of the strategy moneyness center M, yesterday's strategy PNL P (1), the five-day average strategy

PNL ¯P (5), the five-day standard deviation of strategy PNL σ(5) P , and the option-level descrip- tors used elsewhere in the models (time value, mid price, ∆, Γ, and ν); together they capture

strategy geometry, local carry, and short-horizon persistence. The market-state family consists of (IV, IS), slope proxies, and lagged realized SPX measures; they capture the entry-time vari-

ance/skew environment and recent underlying conditions observed by 10:00 ET. We derive these families to separate strategy-specific signals from market-wide states. The continuous target in

the model zoo is the strategy return-per-underlying yi,t = reth undi,t, and the directional target is 1(yi,t > 0). A full predictor dictionary for the compact notation used here is reported in

Appendix Table A3.

## 3 Unconditional Trading Rules

An unconditional strategy opens option positions each day without conditioning on state vari- ables that would change timing or size. Positions are then held to expiration, and performance is

measured by holding-period return and PNL. The simplest positions use a single option; richer structures combine multiple legs to target specific payoff and Greeks profiles.

We compute return and PNL to expiration for all individual options and strategy combina- tions and summarize their distributions.

### 3.1 Variance Risk Premium

Over the full sample (09/2016 to February 2, 2026), 0DTE options deliver a positive and statisti- cally significant variance risk premium: implied variance exceeds realized variance to expiration

(Figure 1, Panel B). Trading variance requires a strip of options across strikes, with weights

B: Variance Risk Premiums to Expiration

A: Variance Swap Rate to Expiration g _p y y g p_p y y

0.008

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.00200

0.007

0.00175

0.006

0.00150

0.005

% to expiry

% to expiry

0.00125

0.004

0.00100

0.003

0.00075

0.002

0.00050

0.001

0.00025

0.000

0.00000

10:00

10:30

11:00

11:30

12:00

12:30

13:00

13:30

14:00

14:30

15:00

15:30

10:00

10:30

11:00

11:30

12:00

12:30

13:00

13:30

14:00

14:30

15:00

15:30

C: Volatility Swap Rate to Expiration

D: Volatility Risk Premiums to Expiration g _ p y y g p_ p y y

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.175

0.8

0.150

0.7

0.125

0.6

0.5

% to expiry

% to expiry

0.100

0.4

0.075

0.3

0.050

0.2

0.025

0.1

0.0

0.000

10:00

10:30

11:00

11:30

12:00

12:30

13:00

13:30

14:00

14:30

15:00

15:30

10:00

10:30

11:00

11:30

12:00

12:30

13:00

13:30

14:00

14:30

15:00

15:30

#### Figure 1: Variance Risk Premiums. The figure shows average variance and its risk premiums (VRP) to
expiration for 0DTE SPXW options by intraday 30-minute bars. VRP is computed as implied minus realized
variances from a given bar to expiration at 16:00 ET. Panels C and D are based on average volatility and differences
in volatilities, respectively. We average variables measured at the end of each bar to expiration at 16:00 that day
(with 95% confidence bounds based on Newey-West standard errors with three lags; Newey and West 1987).
Bars show mean values; each bar is accompanied by median, 25th, and 75th percentiles. X-axis labels show the
endpoints of intraday bars. The sample period is from 09/2016 to February 2, 2026.

> [!NOTE]
> *Visual Reconstruction and Detailed Description Needed for Figure 1*

determined by the chosen model-free variance formula. Under the Cboe VIX construction, risk- neutral variance is a weighted sum of OTM option prices (equation 2). In practice, the 0DTE

variance swap rate to expiration is a weighted sum of OTM call and put time values (Figure 1,

Panel A). The realized variance risk premium can be interpreted as time value retained after

paying exercised options at expiration. As realized variance increases, terminal index moves are larger on average and payouts rise; with zero realized variance, the index is unchanged and the

initial time value is retained.

Panel B of Figure 1 suggests that selling 0DTE variance is profitable on average. The economic magnitude, however, is small because OTM time values only hours before expiration

are small (Figure 2). Even in an extreme zero-realized-variance scenario, collecting roughly twice the average OTM time value implies only about 0.20% of spot. Translating the variance

object into a spot-relative monetization benchmark, the median realized VRP from 10:00 ET to expiration is approximately 0.0011% of underlying. These magnitudes are difficult to monetize

after realistic trading frictions.

B: Call Time Value, 10:00

A: Call Price, 10:00

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

2.00

0.30

1.75

0.25

1.50

1.25

0.20

% of Underlying

% of Underlying

1.00

0.15

0.75

0.10

0.50

0.05

0.25

0.00

0.00

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

C: Put Price, 10:00

D: Put Time Value, 10:00

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

2.00

0.30

1.75

0.25

1.50

1.25

% of Underlying

% of Underlying

0.20

1.00

0.15

0.75

0.10

0.50

0.05

0.25

0.00

0.00

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

#### Figure 2: 0DTE Option Prices and Time Value. The figure provides statistics on prices of 0DTE call and
put options at 10:00 ET. Panels on the left show option mid-price relative to the underlying price in %. Panels on
the right show time value relative to underlying, also in %. Bars show mean values, and each bar is accompanied
by median, 25th, and 75th percentiles. X-axis labels show the moneyness of the analyzed options. The sample
period is from 09/2016 to February 2, 2026.

> [!NOTE]
> *Visual Reconstruction and Detailed Description Needed for Figure 2*

### 3.2 Individual Options

For individual calls and puts, we report both return relative to mid price and realized PNL relative to spot at entry, (payoff −mid price)/underlying price × 100%, using 10:00 ET en-

tries in the main text (Figure 3). Individual option returns are highly volatile, especially for

OTM contracts, and mean returns are often not statistically distinct from zero. Because return distributions are strongly skewed, inference on means alone is not very informative. PNL scaled

by spot is less asymmetric and shows that ATM-to-OTM calls and most puts lose on average, while OTM contracts have relatively tighter distributions. Selling slightly OTM calls and puts

is positive in up to 75% of observations; deeper ITM contracts are much more volatile, with interquartile ranges around 0.7-0.8% of spot.

B: Call PNL/Underlying

A: Call Returns

0.4

75

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.3

50

0.2

25

0.1

% of Option Mid-price

% of Underlying

0

0.0

25

0.1

50

0.2

0.3

75

0.4

100

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

D: Put PNL/Underlying

C: Put Returns

60

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.3

40

0.2

20

0.1

0

% of Option Mid-price

0.0

% of Underlying

20

0.1

40

0.2

60

0.3

80

0.4

100

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

#### Figure 3: 0DTE Option Returns. The figure provides statistics on the profitability of naked 0DTE call and
put option buying at 10:00 ET and holding to expiry at 16:00 ET. Panels on the left show realized return in
% relative to option mid-price. Panels on the right show the realized profit per one unit of underlying relative
to underlying price (payoff −mid price)/underlying price × 100%. Bars show mean values, and each bar is
accompanied by median, 25th, and 75th percentiles. X-axis labels show the moneyness of the analyzed options.
The sample period is from 09/2016 to February 2, 2026.

> [!NOTE]
> *Visual Reconstruction and Detailed Description Needed for Figure 3*

Option performance for entries at 16:00 ET on the previous day, 13:00 ET, and 15:00 ET is shown in Figures A2, A3, and A4. The main qualitative findings are unchanged across entry

times.

### 3.3 Option Strategies

Single-option positions load on both volatility and direction, while multi-leg structures allow tighter exposure design. We analyze: (i) ATM straddles and strangles, which are close to delta-

neutral at initiation and primarily volatility-focused; (ii) iron butterflies and iron condors, which are short-volatility with bounded downside; (iii) risk reversals, which load on skewness premia;

(iv) bull call and bear put spreads, which are directional structures; and (v) call and put ratio spreads (1 × 2), which target moderate directional moves with asymmetric tails.

These structures have distinct payoff profiles (Figure A1). Straddles/strangles have limited downside and open upside; iron butterfly/condor have bounded upside and downside; bull/bear

spreads are directional with bounded payoffs; ratio spreads have capped upside and open down- side; risk reversals are open-tailed on both sides. Entry cost reflects these shapes: narrow-strike

risk reversals and ratio spreads are often credit structures, while straddles and strangles are typically the most expensive debit structures. For some combinations, the initial net premium

is close to zero or negative, so the return scaled by the initial premium is unstable or not economically meaningful. We therefore focus on realized PNL scaled by spot. Figure 4 and

Table 1 show broad dispersion for most structures. To keep the table readable, we report only near-ATM combinations there, while Figure 4 continues to show the full grid. Spread and ratio-

spread outcomes are highly variable, with interquartile ranges often roughly symmetric around zero. For ATM-long directional spreads, median PNL is typically negative. Using ITM long legs

yields more symmetric distributions with means close to zero and small sign differences between call and put structures, consistent with the upward index drift in much of 2017-2023. OTM

A: Straddle/Strangle

B: Iron Butterfly/Condor

C: Risk Reversal

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.2

0.04

0.2

0.1

0.1

0.03

% of Underlying

% of Underlying

% of Underlying

0.0

0.0

0.02

0.1

0.1

0.01

0.2

0.2

0.3

0.995/1/1.005

0.99/1/1.01

0.98/1/1.02

0.995/0.997/1.003/1.005

0.99/0.995/1.005/1.01

0.98/0.99/1.01/1.02

0.00

1/1

0.995/1.005

0.985/1.015

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

0.99/1.01

0.98/1.02

D: Bull Call Spread

E: Bear Put Spread

0.4

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.4

0.3

0.2

0.2

0.1

% of Underlying

% of Underlying

0.0

0.0

0.1

0.2

0.2

0.3

0.4

0.4

0.995/1

0.985/1

1/1.005

1/1.01

1/1.015

1/1.02

0.99/1

0.98/1

0.995/1.005

0.985/1.015

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

0.99/1.01

0.98/1.02

F: Call Ratio Spread

G: Put Ratio Spread

0.4

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.4

0.3

0.2

0.2

0.1

% of Underlying

% of Underlying

0.0

0.0

0.1

0.2

0.2

0.3

0.4

0.4

1/1.005

1/1.015

0.995/1

0.985/1

1/1.01

1/1.02

0.99/1

0.98/1

0.995/1.005

0.985/1.015

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

0.99/1.01

0.98/1.02

#### Figure 4: 0DTE Static Option Strategies. The figure shows statistics on the profitability of 0DTE option
strategies from 10:00 ET to expiry at 16:00 ET. All panels show strategies' realized PNL relative to underlying
price (payoff −mid price)/underlying price × 100%. Bars show mean values, accompanied by the median and
the 25th and 75th percentiles. X-axis labels show the combination of moneyness of options used for a strategy.
The sample period is from 09/2016 to February 2, 2026.

> [!NOTE]
> *Visual Reconstruction and Detailed Description Needed for Figure 4*

strangles are relatively compact and mostly negative in the upper and lower quartiles, so short strangles outperform in at least 75% of observations. Risk reversals are the only structure with

consistently positive mean, median, and 25th percentile PNL, but the average effect is small

(about 0.01% of spot), which limits implementability.

Strategy Moneyness Count Mean Volatility Min 1% 25% 50% 75% 99% Max Skew SR, p.a.

Strangle/Straddle 1/1 1318 -0.0011 0.55 -2.69 -0.99 -0.28 -0.08 0.20 1.83 6.04 2.11 -0.03 0.995/1.005 1319 -0.0009 0.47 -2.70 -0.83 -0.17 -0.06 0.02 1.76 6.02 3.07 -0.03 0.99/1.01 1319 -0.0067 0.38 -2.75 -0.78 -0.08 -0.02 -0.01 1.59 5.93 4.69 -0.28 Iron Butterfly/Condor 0.995/1/1.005 1318 0.0002 0.16 -0.50 -0.25 -0.12 -0.05 0.13 0.35 0.43 0.48 0.02 0.99/1/1.01 1318 -0.0056 0.30 -1.00 -0.61 -0.25 0.02 0.22 0.59 0.83 -0.14 -0.30 0.995/0.997/1.003/1.005 1319 -0.0006 0.08 -0.20 -0.15 -0.07 0.01 0.07 0.15 0.18 0.00 -0.12 0.99/0.995/1.005/1.01 1319 -0.0058 0.17 -0.50 -0.43 -0.11 0.04 0.09 0.29 0.40 -0.71 -0.54 Risk Reversal 0.995/1.005 1319 0.0100 0.62 -4.43 -1.86 0.00 0.02 0.04 1.94 8.28 2.04 0.25 0.99/1.01 1319 0.0153 0.46 -3.89 -1.34 0.00 0.01 0.03 1.45 7.80 4.39 0.53 Bull Call Spread 1/1.005 1319 -0.0031 0.20 -0.43 -0.24 -0.18 -0.10 0.21 0.35 0.50 0.50 -0.24 1/1.01 1319 -0.0028 0.32 -0.51 -0.42 -0.23 -0.12 0.17 0.74 1.00 0.92 -0.14 0.995/1.005 1319 -0.0052 0.38 -0.70 -0.56 -0.39 0.02 0.37 0.50 1.00 -0.12 -0.22 0.99/1.01 1319 -0.0113 0.58 -1.12 -1.07 -0.39 0.03 0.37 1.00 2.00 -0.14 -0.31 Call Ratio Spread 1/1.005 1319 -0.0076 0.37 -6.89 -1.10 -0.12 -0.03 0.15 0.52 1.80 -7.30 -0.33 1/1.01 1319 -0.0071 0.37 -6.33 -0.45 -0.21 -0.12 0.16 0.73 1.26 -4.48 -0.31 0.995/1.005 1319 -0.0097 0.43 -6.67 -0.89 -0.29 0.02 0.28 0.70 1.52 -3.84 -0.36 0.99/1.01 1319 -0.0156 0.57 -5.91 -1.03 -0.37 0.03 0.37 1.03 1.64 -1.08 -0.43 Bear Put Spread 0.995/1 1318 0.0028 0.20 -0.27 -0.21 -0.16 -0.11 0.22 0.38 0.45 0.75 0.21 0.99/1 1318 0.0084 0.33 -0.46 -0.38 -0.22 -0.14 0.18 0.81 0.89 1.12 0.40 0.995/1.005 1269 0.0055 0.38 -0.58 -0.50 -0.37 -0.03 0.41 0.56 0.77 0.14 0.23 0.99/1.01 1142 0.0064 0.59 -1.03 -1.00 -0.39 -0.05 0.41 1.07 1.12 0.18 0.17 Put Ratio Spread 0.995/1 1318 0.0082 0.32 -3.54 -1.30 -0.08 -0.02 0.15 0.59 1.43 -3.17 0.41 0.99/1 1318 0.0194 0.32 -2.85 -0.53 -0.17 -0.12 0.16 0.83 1.99 0.23 0.95 0.995/1.005 1269 0.0104 0.38 -3.29 -1.09 -0.24 -0.01 0.29 0.80 1.68 -1.00 0.43 0.99/1.01 1142 0.0182 0.55 -2.40 -0.96 -0.35 -0.02 0.38 1.20 2.46 0.22 0.53

### Table 1:
0DTE Static Option Strategies Performance.
The table shows the summary statistics for
the holding period PNL of 0DTE option strategies (from 10:00 ET to 16:00 ET) relative to underlying price
(payoff −mid price)/underlying price×100%. To keep the table concise, we report only near-ATM combinations
with all legs within 1% of ATM; Figure 4 shows the full grid. The SR, p.a. is the Sharpe Ratio annualized by
scaling it up by
√

252. The sample period is from 09/2016 to February 2, 2026.

Performance for the same strategy set at alternative entry times (16:00 ET previous day,

13:00 ET, and 15:00 ET) is shown in Figures A5, A6, and A7. Full-sample unconditional patterns are broadly similar across entry times. Subperiod tables for 2022-2023 and 01/2024-February

2, 2026(Tables A1 and A2) show substantial time variation. This motivates conditional rules that explicitly tie strategy exposure to observable market states.

### 3.4 Regime Stability Around the 2022 Expansion of Daily Expirations

To formalize the regime-shift discussion, we test whether average strategy PNL at 10:00 ET changed after the expansion to daily SPXW expirations in 2022. We define the pre-period as

dates up to April 14, 2022, the post-period as dates from May 11, 2022 onward, and exclude the transition window between April 18 and May 10, 2022. For each strategy, we estimate a pooled

model with combo fixed effects and a post-2022 indicator, clustering standard errors by date.

The post-2022 coefficient is the structural-break estimate.

Strategy Pre-2022 Mean Post-2022 Mean ∆Post-Pre t(∆) p-value Vol Ratio N Pre N Post

Strangle/Straddle -0.0085 -0.0054 0.0031 0.15 0.877 1.04 2952 3575 Iron Butterfly/Condor -0.0094 0.0037 0.0130 1.18 0.240 0.97 3541 4290 Risk Reversal 0.0241 0.0075 -0.0165 -0.73 0.464 1.01 2362 2860 Bull Call Spread -0.0123 0.0008 0.0131 0.53 0.594 0.96 4724 5720 Call Ratio Spread -0.0188 -0.0007 0.0181 0.78 0.435 1.03 4724 5720 Bear Put Spread 0.0190 -0.0066 -0.0255 -0.98 0.326 0.96 4067 5539 Put Ratio Spread 0.0381 -0.0004 -0.0386* -1.77 0.077 0.96 4067 5539

### Table 2: Structural-Break Check Around 2022 Daily-Expiration Expansion. The table reports pre/post
means of strategy PNL relative to underlying (in percentage points), volatility ratios, and the post-period co-
efficient from regressions with combo fixed effects and date-clustered standard errors. The pre-period ends on
April 14, 2022; the post-period starts on May 11, 2022; observations in between are excluded as transition.

Table 2 shows economically non-trivial shifts in several strategies' average PNL signs be- tween the two regimes (for example, bull call and call ratio spreads improve, while bear put

and put ratio spreads deteriorate), but these shifts are statistically weak once we account for strong within-day cross-combo dependence and heavy-tailed realizations. This evidence supports

treating unconditional 0DTE strategy performance as regime-sensitive and motivates conditional rules rather than relying on full-sample means.

### 3.5 Implementability: Execution Costs, Turnover, and Capital Usage

The baseline results above are based on mid-quote marking. To evaluate implementability, we add execution friction at entry in three layers: (i) mid benchmark, (ii) bid/ask execution,

where each strategy leg pays half of the observed option bid-ask spread, and (iii) bid/ask plus an additional 0.5 bp slippage-and-fee charge (in underlying-relative PNL units). We report strategy-

level daily series at 10:00 ET, aggregating equally across moneyness combinations within each strategy.

Strategy Mean Mid Mean B/A Mean B/A+0.5bp SR Mid SR B/A+0.5bp Turnover (bps) SR/Turnover ES1% Mean/ES1% Obs

Strangle/Straddle -0.0046 -0.0047 -0.0097 -0.20 -0.42 0.224 -1.86 1.2781 -0.008 1,319 Iron Butterfly/Condor -0.0030 -0.0032 -0.0082 -0.24 -0.65 0.296 -2.21 0.5866 -0.014 1,319 Risk Reversal 0.0141 0.0140 0.0090 0.54 0.35 0.025 13.96 1.8215 0.005 1,319 Bull Call Spread -0.0062 -0.0065 -0.0115 -0.22 -0.41 0.784 -0.53 0.8973 -0.013 1,319 Call Ratio Spread -0.0105 -0.0108 -0.0158 -0.40 -0.60 0.745 -0.80 1.4357 -0.011 1,319 Bear Put Spread 0.0074 0.0072 0.0022 0.27 0.08 0.654 0.12 0.8256 0.003 1,318 Put Ratio Spread 0.0168 0.0165 0.0115 0.72 0.49 0.603 0.82 0.8228 0.014 1,318

### Table 3: Implementable PNL Diagnostics at 10:00 ET. Means are in % of underlying. "B/A" subtracts
half-spread execution cost computed from option-level bid-ask spreads and strategy legs. "B/A+0.5bp" further
subtracts 0.5 basis points. Turnover is a gross entry premium proxy (in basis points of underlying), computed as
absolute strategy premium plus half-spread cost. ES1% is a 1% expected-shortfall proxy on daily strategy PNL
under B/A+0.5bp.

Table 3 shows that moving from mid to implementable execution mechanically lowers mean

PNLs and annualized Sharpe ratios for most strategies. The turnover proxy is small for all structures in underlying-relative terms, but capital usage measured by left-tail ES1% remains

large relative to average daily PNL, implying low mean-over-tail-capital ratios for most strate- gies. This reinforces that gross unconditional premiums can look materially better than imple-

mentable net performance, especially once friction and downside capital usage are accounted for.

### 3.6 Tail-Risk Diagnostics Beyond Mean PNL

Because strategy distributions are highly non-Gaussian, we explicitly report tail-focused risk diagnostics for implementable net PNL at 10:00 ET (half-spread plus 0.5bp slippage/fees).

Strategy Skewness ES1% Max DD Worst Day Worst 5-Day Loss Prob (%) Obs

Strangle/Straddle 4.62 1.2781 23.475 -2.5113 -7.0941 70.4 1,319 Iron Butterfly/Condor -0.47 0.5866 15.519 -0.7146 -1.6477 45.0 1,319 Risk Reversal 5.55 1.8215 8.209 -3.6411 -5.2603 36.5 1,319 Bull Call Spread 0.35 0.8973 21.473 -0.9755 -3.9473 54.8 1,319 Call Ratio Spread -2.05 1.4357 26.453 -5.7459 -6.2393 53.5 1,319 Bear Put Spread 0.70 0.8256 13.285 -0.8641 -2.9679 61.5 1,318 Put Ratio Spread 0.47 0.8228 9.060 -2.1917 -2.6681 59.1 1,318

### Table 4: Tail-Risk Diagnostics for Implementable 0DTE Strategy PNL. Daily PNL is in % of underlying
and is net of half-spread and 0.5bp costs. Max drawdown is computed strategy-by-strategy as peak-to-trough
decline of the cumulative daily net-PNL series (not a one-day loss and not a cross-strategy sum). ES1%, max
drawdown, worst day, and worst 5-day outcomes emphasize downside exposure and distribution asymmetry.

Table 4 confirms that left-tail risk dominates mean effects for most strategies: ES1% values are economically large (roughly 0.58-1.58% of underlying), worst-day outcomes are severe, and

cumulative drawdowns are substantial. Combined with mixed skewness signs across strategies, this reinforces that mean PNL alone is an insufficient summary for 0DTE strategy evaluation.

Taken together, these unconditional results are weak from an implementation perspective.

Realized PNL is highly volatile, and the average variance premium is economically small at 0DTE horizons. Some favorable strategy outcomes may partly reflect the upward drift of the S&P 500

over our sample. We intentionally do not winsorize extremes, because rare tail realizations are central to the risk of these strategies. To illustrate time variation, Figure 5 plots 63-trading-

B: Iron Butterfly/Condor

A: Straddle/Strangle

C: Risk Reversal

0.98/1.02 0.985/1.015 0.99/1.01 0.995/1.005 1/1

0.98/1.02 0.985/1.015 0.99/1.01 0.995/1.005

0.4

1.0

1.0

1.0

0.2

0.1

0.3

0.8

0.8

0.8

0.1

0.0

0.2

SPX/VIX Scaled Level

SPX/VIX Scaled Level

SPX/VIX Scaled Level

0.6

0.6

0.6

% of Underlying

% of Underlying

% of Underlying

0.0

0.1

0.1

0.4

0.4

0.4

0.1

0.0

0.2

0.1

0.2

0.2

0.2

0.2

0.98/0.99/1.01/1.02 0.98/1/1.02 0.99/0.995/1.005/1.01 0.99/1/1.01 0.995/0.997/1.003/1.005 0.995/1/1.005 0.0

0.3

0.2

0.3

0.4

0.0

0.0

2016-12 2017-12 2018-12 2019-12 2020-12 2021-12 2022-12 2023-12 2024-12 2025-12

2016-12 2017-12 2018-12 2019-12 2020-12 2021-12 2022-12 2023-12 2024-12 2025-12

2016-12 2017-12 2018-12 2019-12 2020-12 2021-12 2022-12 2023-12 2024-12 2025-12

D: Bull Call Spread

E: Bear Put Spread

0.5

0.98/1 0.98/1.02 0.985/1 0.985/1.015 0.99/1 0.99/1.01 0.995/1 0.995/1.005

1.0

1.0

0.2

0.4

0.1

0.8

0.8

0.3

0.0

SPX/VIX Scaled Level

SPX/VIX Scaled Level

0.2

0.6

0.6

% of Underlying

% of Underlying

0.1

0.1

0.4

0.4

0.2

0.0

0.98/1.02 0.985/1.015 0.99/1.01 0.995/1.005 1/1.005 1/1.01 1/1.015 1/1.02 0.0

0.3

0.2

0.2

0.1

0.4

0.2

0.0

2016-12 2017-12 2018-12 2019-12 2020-12 2021-12 2022-12 2023-12 2024-12 2025-12

2016-12 2017-12 2018-12 2019-12 2020-12 2021-12 2022-12 2023-12 2024-12 2025-12

F: Call Ratio Spread

G: Put Ratio Spread

0.5

0.98/1 0.98/1.02 0.985/1 0.985/1.015 0.99/1 0.99/1.01 0.995/1 0.995/1.005

1.0

1.0

0.2

0.4

0.1

0.8

0.8

0.3

0.0

0.2

SPX/VIX Scaled Level

SPX/VIX Scaled Level

0.6

0.6

% of Underlying

% of Underlying

0.1

0.1

0.4

0.4

0.2

0.0

0.98/1.02 0.985/1.015 0.99/1.01 0.995/1.005 1/1.005 1/1.01 1/1.015 1/1.02 0.0

0.3

0.1

0.2

0.2

0.2

0.4

0.0

2016-12 2017-12 2018-12 2019-12 2020-12 2021-12 2022-12 2023-12 2024-12 2025-12

2016-12 2017-12 2018-12 2019-12 2020-12 2021-12 2022-12 2023-12 2024-12 2025-12

#### Figure 5: 0DTE Static Option Strategies: Time-series PNL. The figure shows 63-trading day moving
average PNL of option strategies (from 10:00 ET to expiry at 16:00 ET) relative to underlying price (payoff −
mid price)/underlying price × 100%. Secondary y-axis shows scaled to (0,1) series of SPX and VIX. The sample
period is from 09/2016 to February 2, 2026.

> [!NOTE]
> *Visual Reconstruction and Detailed Description Needed for Figure 5*

day moving averages of strategy PNL together with scaled SPX and VIX series. No strategy

looks close to risk-free; profit and loss regimes can persist, but it is unclear whether they are identifiable ex ante. This motivates a more systematic look at what these strategies are actually

loading on before we ask whether that variation can be forecast in real time.

## 4 What Drives Strategy PNL?

Before turning to implementable conditional rules, we examine which ex-post shocks drive daily strategy PNL. The candidate channels are not symmetric across structures. Variance-focused

positions such as straddles and strangles should load more directly on realized variance, while directional spreads and skew trades should react more strongly to directional asymmetry and

skewness realizations. We therefore relate strategy PNL at 10:00 ET to implied and realized moment measures, combining moneyness configurations within each strategy and absorbing

mechanical differences across strike designs with combo fixed effects.

To quantify strategy sensitivities, we run strategy-specific pooled regressions of realized PNL on implied and realized moments (and related premium terms), combining multiple moneyness

configurations within each strategy. Because changing strike configuration changes moment exposure, we include combo fixed effects.5 Main results are reported in Table 5; last-hour

analogs (15:00 ET to close) are in Appendix Table A4.

Panel A of Table 5 shows that realized variance alone explains little of cross-day strategy

PNL. Even when RV coefficients are statistically significant, R2 values are low (maximum about 4.5% for put ratio spreads). Directional spreads show opposite variance signs, consistent

with negative index-variance comovement: higher variance tends to coincide with stronger down moves, helping bear structures and hurting bull structures. Adding realized skewness in Panel B

materially improves fit for asymmetric strategies such as risk reversals and directional spreads.

5Allowing interactions between combo dummies and other regressors leaves the main conclusions intact. Adding Greeks directly as controls produced unstable and difficult-to-interpret estimates.

Strangle Irons R/Reversal C/Spread C/R/Spread P/Spread P/R/Spread

Panel Realized Variance RV -0.004 -0.001* 0.001 -0.004** -0.002 0.004*** 0.007*** (-1.268) (-1.918) (0.295) (-2.359) (-0.894) (2.901) (5.676) Combo FE Yes Yes Yes Yes Yes Yes Yes R2, Adj. 0.022 0.002 0.001 0.009 0.003 0.017 0.048 Obs. 5,342 6,409 4,274 8,548 8,548 7,728 7,728 Panel Realized Variance and Skewness RV -0.005* -0.001** -0.006** -0.010*** -0.004* 0.011*** 0.010*** (-1.794) (-2.383) (-2.083) (-3.333) (-1.733) (3.636) (3.954) RS 0.019 0.006 0.137*** 0.123*** 0.044 -0.118*** -0.059*** (0.787) (1.323) (6.087) (5.276) (1.569) (-5.230) (-3.258) Combo FE Yes Yes Yes Yes Yes Yes Yes R2, Adj. 0.030 0.004 0.335 0.180 0.025 0.187 0.094 Obs. 5,342 6,409 4,274 8,548 8,548 7,728 7,728 Panel Implied and Realized Variances IV -0.013** 0.004** 0.009 0.019*** 0.021*** -0.021*** -0.010** (-2.274) (2.124) (1.256) (3.093) (4.297) (-3.075) (-2.542) RV 0.013 -0.006** -0.011 -0.028*** -0.028*** 0.030*** 0.020*** (1.362) (-2.171) (-1.190) (-3.773) (-3.696) (3.672) (4.086) Combo FE Yes Yes Yes Yes Yes Yes Yes R2, Adj. 0.056 0.009 0.014 0.050 0.049 0.064 0.060 Obs. 5,337 6,403 4,270 8,540 8,540 7,720 7,720 Panel Implied and Realized Variances and Skewness IV -0.016** 0.005** 0.003 0.019*** 0.024*** -0.021*** -0.012*** (-2.326) (2.038) (0.446) (3.274) (4.478) (-3.475) (-3.308) IS -0.008 0.008 0.028* 0.064*** 0.053*** -0.069*** -0.052*** (-0.375) (1.084) (1.788) (5.291) (2.842) (-5.066) (-4.531) RV 0.013 -0.006** -0.007 -0.025*** -0.028*** 0.028*** 0.019*** (1.349) (-2.241) (-0.848) (-4.436) (-4.123) (4.755) (4.239) RS 0.021 0.011 0.157*** 0.155*** 0.065*** -0.157*** -0.090*** (0.830) (1.577) (7.384) (8.832) (2.936) (-8.912) (-6.396) Combo FE Yes Yes Yes Yes Yes Yes Yes R2, Adj. 0.071 0.013 0.350 0.233 0.089 0.263 0.131 Obs. 5,337 6,403 4,270 8,540 8,540 7,720 7,720

### Table 5:
Option Strategies PNL vs. Implied and Realized Moments.
The table shows the re-
sults of regressing realized PNL of option strategies (10:00 ET to expiry at 16:00 ET) on implied and
realized distribution moments.
PNL is specified per one unit of underlying relative to underlying price
(payoff −mid price)/underlying price × 100%. The result in each column is based on a pooled regression of
strategy PNL for several moneyness combinations, including combo fixed effects (Combo FE) and date-clustered
standard errors. The sample period is from 09/2016 to February 2, 2026.

Ratio-spread fit also improves, though sensitivity becomes unstable when large directional moves dominate.

Including implied variance and implied skewness proxies in Panels C and D adds further explanatory power, typically by 2-7 percentage points of R2. The increase is strongest for

strangles, directional spreads, and call ratio spreads. Overall, strategy PNL is driven more by realized skewness (directional movement) than by realized variance alone, except for variance-

focused structures such as strangles. Relative to evidence for delta-hedged options (e.g., B¨uchner and Kelly 2022), the link to variance premia is weaker and less predictable in our unhedged 0DTE

setting. Last-hour regressions in Appendix Table A4 amplify this pattern: fits are often higher, and realized skewness remains the dominant channel.

### 4.1 Inference Robustness: Date Clustering and Multiple Testing

As an inference-robustness step, we re-estimate the key pooled regressions at 10:00 ET with combo fixed effects and date-clustered standard errors, and then adjust p-values for multiple

testing using Benjamini-Hochberg FDR control (Benjamini and Hochberg 1995), following con- cerns about repeated testing in predictability settings (Harvey, Liu, and Zhu 2015).

Table 6 shows that the strongest directional-skew links remain after clustering and BH ad- justment, while many weaker coefficients lose support. This sharpens the main interpretation

of the unconditional evidence: what matters for many 0DTE strategies is not generic exposure to same-day variance, but directional asymmetry and the skewness channel. The conditional

question is therefore whether states observed by 10:00 ET can capture enough of that variation to improve trading decisions in real time.

Strategy Spec Coef (key var) t (clustered) p-value q-value (BH) Obs

Strangle/Straddle RV only -0.004 -1.30 0.194 0.239 5,337 Strangle/Straddle RV + RS 0.018 0.71 0.476 0.500 5,337 Strangle/Straddle IV + IS + RV + RS 0.021 0.83 0.407 0.449 5,337 Iron Butterfly/Condor RV only -0.001 -1.81 0.070 0.113 6,403 Iron Butterfly/Condor RV + RS 0.008 1.71 0.087 0.130 6,403 Iron Butterfly/Condor IV + IS + RV + RS 0.011 1.58 0.115 0.161 6,403 Risk Reversal RV only 0.001 0.28 0.777 0.777 4,270 Risk Reversal RV + RS 0.139 6.09 0.000 0.000 4,270 Risk Reversal IV + IS + RV + RS 0.157 7.38 0.000 0.000 4,270 Bull Call Spread RV only -0.004 -2.55 0.011 0.019 8,540 Bull Call Spread RV + RS 0.121 5.21 0.000 0.000 8,540 Bull Call Spread IV + IS + RV + RS 0.155 8.83 0.000 0.000 8,540 Call Ratio Spread RV only -0.002 -0.98 0.326 0.380 8,540 Call Ratio Spread RV + RS 0.041 1.48 0.140 0.184 8,540 Call Ratio Spread IV + IS + RV + RS 0.065 2.94 0.003 0.007 8,540 Bear Put Spread RV only 0.004 2.89 0.004 0.007 7,720 Bear Put Spread RV + RS -0.120 -5.19 0.000 0.000 7,720 Bear Put Spread IV + IS + RV + RS -0.157 -8.91 0.000 0.000 7,720 Put Ratio Spread RV only 0.007 5.66 0.000 0.000 7,720 Put Ratio Spread RV + RS -0.060 -3.24 0.001 0.003 7,720 Put Ratio Spread IV + IS + RV + RS -0.090 -6.40 0.000 0.000 7,720

### Table 6: Clustered-SE Inference with BH Multiple-Testing Adjustment. Reported coefficients are from
pooled regressions with combo fixed effects and date-clustered standard errors; q-values are Benjamini-Hochberg
adjustments across all reported tests.
| 5 | Conditional Trading Rules |
| --- | --- |

The conditional exercise asks whether these state links can be turned into implementable real- time rules. The answer is not uniform across strategies, but neither is it uniformly negative.

Once the problem is cast as a directional classification task and estimated under strict no-look- ahead windows, several strategy-specific rules and diversified baskets deliver meaningful net

out-of-sample performance.

All strategies in this paper are unhedged and held to expiration. Their PNL is therefore driven by entry cost and by the realized underlying move from entry to close. Entry costs

are observable and related to expected variance, but forecasting the signed daily index move is notoriously difficult.6 A more realistic target is directionally asymmetric intraday payoffs

and higher-moment variation rather than fine-grained return magnitudes. This is why the

## 6 Our baseline view is that short-horizon directional predictability in the index is economically weak.

conditional analysis below treats direction prediction, probability calibration, and net economic value as separate objects.

### 5.1 A Simple State Filter at 10:00 ET: VIX Regimes (Ex-Post Cutoffs)

As a minimal implementable conditioning step, we sort trading days into low/mid/high regimes using full-sample terciles of the 10:00 ET 0DTE implied-variance measure (from our VIX-style

estimator). Concretely, this variable is the integrated implied variance from 10:00 ET to end-of- day (16:00 ET), constructed from SPXW 0DTE options using the VIX methodology. Regime

thresholds are therefore identified ex post (full-sample terciles), while the state variable itself is observed ex ante at entry on each day. We then compute strategy PNL means across these

regimes.

Strategy Mean Full Mean Low-VIX Mean Mid-VIX Mean High-VIX High-Low t(H-L) p(H-L) Obs

Strangle/Straddle -0.0046 -0.0006 -0.0032 -0.0100 -0.0095 -0.33 0.745 1,319 Iron Butterfly/Condor -0.0030 0.0016 0.0005 -0.0111 -0.0127 -0.93 0.353 1,319 Risk Reversal 0.0141 -0.0016 -0.0043 0.0482 0.0498 1.49 0.136 1,319 Bull Call Spread -0.0062 -0.0035 -0.0171 0.0019 0.0054 0.17 0.863 1,319 Call Ratio Spread -0.0105 -0.0027 -0.0134 -0.0155 -0.0127 -0.42 0.673 1,319 Bear Put Spread 0.0074 -0.0024 0.0134 0.0113 0.0137 0.44 0.660 1,318 Put Ratio Spread 0.0168 -0.0036 0.0119 0.0420 0.0455 1.75 0.080 1,318

### Table 7: Conditional Strategy PNL by VIX Regime at 10:00 ET (Ex-Post Tercile Cutoffs). Means
are daily strategy PNL in % of underlying (10:00 ET to 16:00 ET), with equal weighting across moneyness
combinations within each strategy and day. Regimes are based on full-sample terciles of the 10:00 ET integrated
implied variance (10:00-16:00) from SPXW 0DTE options, constructed with the VIX methodology.

Table 7 shows clear regime heterogeneity: downside-oriented structures (bear put and put ratio spreads) earn substantially higher average PNL in high-VIX states than in low-VIX states,

while upside-oriented call-spread structures perform better in low-VIX states. Economically, this suggests that even simple state partitions can alter unconditional performance profiles materially,

though statistical strength remains limited for most strategies in this static design.

### 5.2 Strict Out-of-Sample Conditional Protocol

To keep the conditioning exercise implementable, we use a strict out-of-sample protocol with no look-ahead construction of features. On each date, predictors include only variables observed

by 10:00 ET: contemporaneous implied/state quantities (including the 10:00 ET SPXW 0DTE integrated implied variance from 10:00 to 16:00, plus skew/slope proxies), lagged realized vari-

ables, and lagged strategy-PNL terms. We estimate both expanding-window and rolling-window schemes (252 trading-day minimum) for sign prediction of net strategy PNL and evaluate them

using hit rate, probability calibration, and net economic value after execution costs. With this burn-in, OOS forecasts begin in April 2019 and run through February 2, 2026. This design

follows the practical OOS discipline emphasized by Goyal and Welch (2008) and aligns with the event-state perspective in Knox, Londono, Samadi, and Vissing-Jorgensen 2025.

To avoid pooling many overlapping strike designs in one conditional exercise, we fix one rep- resentative near-ATM moneyness configuration for each strategy type. Candidate configurations

satisfy maxl |Ml −1| ≤0.01; within each strategy we select the most frequent configuration by trading-day coverage. The selected configurations are listed in Table 8 and all lie within ±0.5%

of ATM.

Strategy Representative moneyness Days Max |M −1|

Bear Put Spread 0.995/1 1318 0.005 Bull Call Spread 1/1.005 1319 0.005 Call Ratio Spread 1/1.005 1319 0.005 Iron Butterfly/Condor 0.995/0.997/1.003/1.005 1319 0.005 Put Ratio Spread 0.995/1 1318 0.005 Risk Reversal 0.995/1.005 1319 0.005 Strangle/Straddle 0.995/1.005 1319 0.005

### Table 8: Representative Strategy Moneyness Configurations for Conditional Tests. For each strategy
type, we select one near-ATM configuration under maxl |Ml−1| ≤0.01, choosing the configuration with the highest
day coverage in the sample. The last column reports the maximum across legs of the absolute distance from ATM,
maxl |Ml −1|, not the width of the full structure. Thus, a configuration such as 0.995/0.997/1.003/1.005 has Max
|M −1| = 0.005 because its most extreme legs are 0.5% away from ATM.

After this representative-moneyness restriction, we keep the main-text conditional evidence fully strategy-specific to avoid additional averaging across strategy panels. The benchmark

specifications in Tables 10 and 11 use a deliberately parsimonious predictor set: market-state variables plus lagged strategy-PNL terms. Richer baseline/GEX/flow/liquidity stacks are exam-

ined separately in the model-zoo exercises, where GEX variables are flow/exposure proxies based on traded volume, open interest, and leg Greeks rather than a dealer-inventory reconstruction.

$$Define net strategy return as ynet s,t = PNLnet s,t = reth unds,t −cs,t, \qquad (29)$$

where cs,t is implementation cost (half-spread plus fixed 0.5bp).

We compare three prediction-to-position designs under one common OOS setup:

$$(A) Return target: ˆys,t = fs(Xs,t), w(R) s,t = sign(ˆys,t), \qquad (30)$$

$$(B) Binary target (Logistic): ps,t = Pr(ynet s,t > 0 | Xs,t) = Λ(\alphas + \beta⊤ s Xs,t), \qquad (31)$$

$$ = \alphas + \beta⊤ s Xs,t, \qquad (32)$$

log  ps,t 1 −ps,t

$$(B1) Hard map: w(H) s,t = sign(ps,t −0.5) ∈{−1, + 1}, \qquad (33)$$

$$(B2) Soft map: w(S) s,t = 2ps,t −1 ∈[−1, + 1]. \qquad (34)$$

For all three designs, realized trading return is rs,t = ws,t ynet s,t . In words, hard mapping is full-size directional timing, while soft mapping is confidence-weighted directional timing.

The economic difference is simple: (A) forecasts payoff magnitude and then trades direction;

(B1) forecasts only direction and trades full size; (B2) forecasts direction and scales position size by confidence. In our implementation, each strategy is estimated separately at 10:00 ET using

only information available by that time (contemporaneous implied-state predictors and lagged realized predictors), with no-look-ahead feature construction.

We keep logistic as the benchmark in strategy-level tests for three reasons. First, the trading decision is directional (long vs short), so modeling Pr(ynet > 0) is directly aligned with the traded

object. Second, logistic outputs are bounded probabilities, which allows transparent calibration and Brier-score diagnostics in addition to hit rates. Third, in short-horizon 0DTE data with

noisy payoffs and limited per-strategy sample sizes, a low-variance parametric benchmark is less prone to unstable overfitting than higher-capacity nonlinear models.

Model Family SR (Return) Mean (Return, bps) SR (Hard) Mean (Hard, bps) SR (Soft) Mean (Soft, bps)

Ridge -0.34 -0.319 1.07 0.891 0.84 0.352 Elastic Net 0.34 0.305 1.06 0.894 0.92 0.385 Random Forest -0.43 -0.409 0.60 0.547 0.19 0.059 LightGBM 0.48 0.485 0.13 0.127 0.35 0.155 XGBoost -0.32 -0.313 0.65 0.606 0.47 0.183

### Table 9: Target Choice Experiment: Return Prediction vs Logistic Hard/Soft Mapping. Each row
compares the same model family under three implementations on the same representative stacked OOS panel:
we first estimate strategy-specific models separately (one representative moneyness per strategy), then stack
resulting strategy-day OOS returns across strategies and dates. Thus, pooling here is at the evaluation stage
(stacked strategy-day observations), not a single cross-strategy model fit. Implementations are: (A) direct return
prediction with wt = sign(ˆyt), (B1) logistic binary prediction with hard mapping wt = sign(ˆpt −0.5), and (B2)
logistic binary prediction with soft mapping wt = 2ˆpt −1. Columns report annualized SR net and mean net PNL
(bps).

Construction details for Table 10. Let s index strategy and t index date. For each strategy s, we estimate a separate logistic model on that strategy's own daily series only (no cross-

strategy pooling): ys,t = 1{PNLnet s,t > 0} with predictors observed by 10:00 ET. In the bench- mark, these predictors are the 10:00 ET implied-state variables (IVt, ISt, slope upt, slope dnt),

one-day-lagged realized SPX moments, and lagged strategy-PNL terms (P (1), ¯P (5), σ(5) P ). After representative-moneyness selection (Table 8), each strategy contributes one moneyness config-

uration; we do not average across multiple strike designs in this table. At each OOS date t, estimation uses data through t −1 only, with either expanding or 252-day rolling windows; pre-

dictors are standardized within the training window, and the logistic model is estimated with

L2 regularization. We then form ˆps,t, trade with sign(ˆps,t −0.5), and report OOS diagnostics.

Table 9 shows a clear ranking of target designs. Direct return prediction remains weak in this short-horizon setting: only the Elastic Net and LightGBM regressions stay modestly positive

Strategy Protocol Hit Rate (%) Brier Calib. Slope Mean Net (bps) SR Net N

Strangle/Straddle Expanding (252d) 71.8 0.197 0.38 2.171 0.70 1,061 Strangle/Straddle Rolling (252d) 70.2 0.200 0.24 2.157 0.70 1,061 Iron Butterfly/Condor Expanding (252d) 63.9 0.227 0.68 0.446 0.82 1,061 Iron Butterfly/Condor Rolling (252d) 63.1 0.234 0.44 0.442 0.82 1,061 Risk Reversal Expanding (252d) 74.5 0.183 0.47 -0.374 -0.09 1,061 Risk Reversal Rolling (252d) 74.8 0.183 0.49 1.531 0.37 1,061 Bull Call Spread Expanding (252d) 57.9 0.245 -0.01 0.276 0.21 1,061 Bull Call Spread Rolling (252d) 56.5 0.252 -0.04 0.260 0.20 1,061 Call Ratio Spread Expanding (252d) 58.9 0.245 0.31 -0.319 -0.13 1,061 Call Ratio Spread Rolling (252d) 59.4 0.247 0.16 -0.538 -0.22 1,061 Bear Put Spread Expanding (252d) 64.0 0.233 0.01 0.473 0.36 1,060 Bear Put Spread Rolling (252d) 62.2 0.239 -0.05 0.431 0.33 1,060 Put Ratio Spread Expanding (252d) 67.1 0.225 0.93 2.578 1.26 1,060 Put Ratio Spread Rolling (252d) 65.7 0.225 0.57 2.159 1.05 1,060

### Table 10: Strict Out-of-Sample Conditional Performance at 10:00 ET (Representative Moneyness).
Each strategy is estimated separately with a logistic benchmark on the representative moneyness configuration
(Table 8), using only 10:00 ET information: contemporaneous implied/state variables, lagged realized variables,
and lagged strategy-PNL terms. No cross-strategy pooling is used in this table; each row is one strategy under
one protocol. We report two window rules (expanding and rolling, minimum 252 trading days). Directional signal
is sign(ˆpt −0.5) and net daily strategy return is this sign times strategy PNL net of half-spread and 0.5bp. OOS
forecasts begin after the 252-day burn-in in April 2019 and run through February 2, 2026. Reported columns are
hit rate (%), Brier score, calibration slope, mean net PNL (bps), annualized SR net, and OOS observations.

after costs, while the other return-target specifications are negative. By contrast, binary designs are materially stronger. Within the binary setup, hard mapping dominates soft mapping in four

of the five model families once costs are applied, with the ridge-logit and elastic-net-logit variants reaching SRs slightly above 1.0. We therefore keep binary-hard as the main implementation and

treat soft mapping as robustness. For strategy-level tests, we retain the logistic benchmark because it remains stable across mappings and provides transparent probability diagnostics.

Table 10 shows that the fixed logistic benchmark delivers economically meaningful strategy- specific OOS results under both the expanding and rolling protocols. Put ratio spreads are the

strongest individual series, with 2.58 bps mean net and an SR of 1.26 in the expanding specifi- cation. Strangle/straddle structures remain positive, although more modest once the 2025-2026

extension is included. Iron butterfly/condor structures still retain an attractive Sharpe ratio of 0.82. Other strategies are weaker, and call ratio spreads remain unattractive. Conditioning

therefore helps, but selectively rather than uniformly.

### 5.3 OOS Investment Time-Series from Model Signals

To translate Table 10 into an investable object, we construct daily OOS strategy returns from the same strategy-specific logistic benchmark signals using a common rolling-window estimation

rule (252-trading-day window) for all strategies. The strategy signal is then applied to the same representative moneyness configuration and net-PNL definition as in Table 10.

Strategy Mean Net (bps) SR Net Hit Rate (%) Long Share (%) ES1% (bps) Worst Day (bps) Max DD (bps) Days

Put Ratio Spread 2.159 1.05 65.7 31.2 -153.12 -354.21 -531.85 1060 Strangle/Straddle 2.157 0.70 70.2 8.3 -266.60 -601.07 -1341.07 1061 Risk Reversal 1.531 0.37 74.8 87.8 -283.04 -535.16 -2006.84 1061 Iron Butterfly/Condor 0.442 0.82 63.1 47.8 -16.48 -17.46 -204.21 1061 Bear Put Spread 0.431 0.33 62.2 8.9 -38.86 -43.53 -479.78 1060 Bull Call Spread 0.260 0.20 56.5 15.8 -35.23 -36.64 -619.43 1061 Call Ratio Spread -0.538 -0.22 59.4 26.7 -250.45 -690.00 -1173.55 1061

Equal-weight basket (Top 3 by Mean PNL) 1.949 1.17 69.4 42.5 -121.66 -206.83 -520.91 1061 Equal-weight basket (Top 3 by SR) 1.587 1.27 61.3 29.1 -99.91 -224.84 -474.91 1061 Equal-weight basket (All) 0.920 1.01 59.8 32.4 -65.24 -139.08 -392.96 1061

### Table 11: OOS Investment Performance from Strategy-Specific Signals (Rolling Window). For each
strategy, we use the same logistic benchmark as in Table 10, estimated with a 252-trading-day rolling window.
Daily strategy return is sign(ˆpt −0.5)×net strategy PNL for the representative moneyness configuration. OOS
forecasts begin after the 252-day burn-in in April 2019 and run through February 2, 2026. The table reports all
strategy series and equal-weight baskets (top-three by mean net PNL, top-three by SR net, and all-strategies), with
columns for mean net (bps), annualized SR net, hit rate (%), long share (%), ES1%, worst day, max drawdown,
and days.

Panel A: Individual Strategy Series

Panel B: Equal-Weight Baskets

EW basket (Top 3 by Mean PNL) EW basket (Top 3 by SR) EW basket (All)

2000

Cumulative net PNL (bps)

Cumulative net PNL (bps)

1000

0

1000

Bear Put Spread Bull Call Spread Call Ratio Spread Iron Butterfly/Condor

Put Ratio Spread Risk Reversal Strangle/Straddle

2000

2019 2020 2021 2022 2023 2024 2025 2026 Date

2019 2020 2021 2022 2023 2024 2025 2026 Date

#### Figure 6: Cumulative OOS Net PNL from Strategy-Specific Signals. Panel A plots cumulative net PNL
(bps) for all individual strategy series. Panel B plots three equal-weight baskets built from the same strategy-level
series: top-three selected by mean net PNL, top-three selected by SR net, and all-strategies basket. Each strategy
uses the same logistic benchmark as in Table 10, estimated with a 252-trading-day rolling window.

> [!NOTE]
> *Visual Reconstruction and Detailed Description Needed for Figure 6*

Table 11 and Figure 6 show the strategy-specific implementation directly implied by Table 10.

Diversification still matters in the extended sample. The top-three basket ranked by SR net reaches a net Sharpe ratio of 1.27, the top-three basket ranked by mean net PNL reaches 1.17,

and even the all-strategies basket reaches 1.01. Equal weighting does not eliminate tail risk, but it materially smooths strategy-specific drawdowns and makes the conditional evidence easier to

interpret as a tradable object rather than a collection of isolated strategy series.

## 6 Conclusion

This paper studies realized payoff distributions of 0DTE SPXW options and common multi-leg strategy templates over 09/2016 to February 2, 2026. A positive 0DTE variance risk premium

exists, but at same-day horizons its economic magnitude is modest and it is not the central object from an implementation perspective. Once attention shifts from a synthetic variance

object to actual option positions and feasible multi-leg structures, the main empirical fact is the wide and state-dependent distribution of realized outcomes rather than a single unconditional

average edge.

The dominant message of the unconditional evidence is risk. Strategy-level distributions are dispersed, asymmetric, and fragile across regimes. After execution costs, downside risk

remains large relative to mean carry: Table 4 reports substantial ES1% values, severe worst-day outcomes, and meaningful cumulative drawdowns even for strategies with positive average PNL.

Mean PNL on its own is therefore an inadequate summary statistic for 0DTE implementation.

At the same time, the conditional evidence is stronger than a purely pessimistic reading would suggest. The main economic link runs through directional asymmetry and skewness

rather than through realized variance alone (Tables 5 and 6). When the forecasting problem is posed as directional classification and evaluated under strict out-of-sample discipline, several

strategy-specific rules remain attractive after costs. In the updated benchmark, put ratio spreads reach a net Sharpe ratio of 1.26 and iron butterfly/condor structures 0.82 in Table 10; at the

portfolio level, the top-three-by-SR basket reaches 1.27 and the all-strategies basket reaches 1.01

in Table 11. The evidence is therefore selective rather than diffuse: some strategy families can be timed meaningfully, many others cannot.

The main limitation of the paper is scope. We study SPXW 0DTE positions held to the close, without dynamic intraday hedging and without a causal market-impact design. Our

conditioning variables are restricted to information available by 10:00 ET, which is intentional but demanding. For that reason, the natural next step is not to search for one universal 0DTE

rule, but to continue updating the data under locked out-of-sample governance, extend event conditioning, and monitor whether the better-performing strategy families remain stable as the

market evolves.

References

Adams, G., C. Dim, B. Eraker, J.-S. Fontaine, C. Ornthanalai, and G. Vilkov, 2025, "Do S&P500 Options Increase Market Volatility? Evidence from 0DTEs," Working paper, SSRN 5641974 (posted October 23, 2025; revised December 3, 2025).

Adams, G., J.-S. Fontaine, and C. Ornthanalai, 2025, "The Market for 0DTE: The Role of Liquidity Providers in Volatility Attenuation," Working paper, SSRN 4881008 (posted July 3, 2024; revised June 20, 2025).

Akima, H., 1970, "A New Method of Interpolation and Smooth Curve Fitting Based on Local Procedures," J. ACM, 17(4), 589-602.

Almeida, C., G. Freire, and R. Hizmeri, 2025, "0DTE Asset Pricing," Proceedings of the EUROFIDAI- ESSEC Paris December Finance Meeting 2024; SSRN 4701401 (posted February 13, 2024; revised June 20, 2025).

Amaya, D., P. A. Garcia-Ares, N. D. Pearson, and A. Vasquez, 2025, "0DTE Index Options and Market Volatility: How Large Is Their Impact?," working paper, Cboe Global Markets.

Bakshi, G. S., N. Kapadia, and D. B. Madan, 2003, "Stock Return Characteristics, Skew Laws, and the Differential Pricing of Individual Equity Options," The Review of Financial Studies, 16(1), 101-143.

Bandi, F. M., N. Fusari, and R. Ren`o, 2023, "0DTE Option Pricing," ESSEC Business School Research Paper No. 2023-03; Johns Hopkins Carey Business School Research Paper No. 24-02; SSRN 4503344.

Beckmeyer, H., N. Branger, and L. Gayda, 2023, "Retail Traders Love 0DTE Options... but should they?," working paper.

Benjamini, Y., and Y. Hochberg, 1995, "Controlling the False Discovery Rate: A Practical and Powerful Approach to Multiple Testing," Journal of the Royal Statistical Society: Series B (Methodological), 57(1), 289-300.

Bogousslavsky, V., and D. Muravyev, 2025, "An Anatomy of Retail Option Trading," Working paper, SSRN 4682388 (first posted 2024, revised 2025).

Brogaard, J., J. Han, and P. Y. Won, 2026, "Does 0DTE Options Trading Increase Volatility?," Working paper, SSRN 4426358 (posted April 26, 2023; revised January 21, 2026).

Bryzgalova, S., A. Pavlova, and T. Sikorskaya, 2023, "Retail Trading in Options and the Rise of the Big Three Wholesalers," The Journal of Finance, 78(6), 3465-3514.

B¨uchner, M., and B. Kelly, 2022, "A factor model for option returns," Journal of Financial Economics, 143(3), 1140-1161.

Cboe, 2023, "Volatility Index Methodology: Cboe Volatility Index," Methodology document, Cboe Global Indices, LLC.

Dim, C., B. Eraker, and G. Vilkov, 2024, "0DTEs: Trading, Gamma Risk and Volatility Propagation," Working paper, SSRN 4692190 (revised January 22, 2024).

Feunou, B., M. R. Jahan-Parvar, and C. Okou, 2018, "Downside Variance Risk Premium," Journal of Financial Econometrics, 16(3), 341-383.

Goyal, A., and I. Welch, 2008, "A Comprehensive Look at The Empirical Performance of Equity Premium Prediction," Review of Financial Studies, 21(4), 1455-1508.

Harvey, C. R., Y. Liu, and H. Zhu, 2015, ". . . and the Cross-Section of Expected Returns," Review of Financial Studies, 29(1), 5-68.

Kilic, M., and I. Shaliastovich, 2019, "Good and Bad Variance Premia and Expected Returns," Manage- ment Science, 65(6), 2522-2544.

Knox, B., J. M. Londono, M. Samadi, and A. Vissing-Jorgensen, 2025, "Equity Premium Events," Work- ing paper, SSRN 4773692 (revised August 31, 2025). Kozhan, R., A. Neuberger, and P. Schneider, 2013, "The Skew Risk Premium in the Equity Index Market," Review of Financial Studies, 26(9), 2174-2203.

Londono, J. M., and M. Samadi, 2023, "The Price of Macroeconomic Uncertainty: Evidence from Daily Options," International Finance Discussion Papers 1376, Board of Governors of the Federal Reserve System.

Newey, W. K., and K. D. West, 1987, "A Simple, Positive-semidefinite, Heteroskedasticity and Autocor- relation Consistent Covariance Matrix," Econometrica, 55(3), 703-708.

A Additional Tables and Figures

A.1 Strategy Templates

B: Strangle

C: Risk Reversal

A: Straddle

30

Long Call Short Put Risk Reversal

50

30

20

25

40

10

20

30

Call Put Straddle

Call Put Strangle

Payoff

Payoff

Payoff

0

15

20

10

10

10

20

5

0

0

30

0 20 40 60 80 100

0 20 40 60 80 100

0 20 40 60 80 100

D: Bull Call Spread

E: Bear Put Spread

F: Call Ratio Spread

Long Call Short Call Call Bull Spread

Long Put Short Put Put Bear Spread

Long Call Short Call x2 Call Ratio Spread

40

60

60

20

40

40

0

Payoff

Payoff

Payoff

20

20

20

0

0

40

20

20

60

0 20 40 60 80 100

0 20 40 60 80 100

0 20 40 60 80 100

G: Put Ratio Spread

H: Iron Butterfly

I: Iron Condor

Long Put Short Put x2 Put Ratio Spread

30

40

10

20

10

20

0

0

Short ATM Call Short ATM Put Long OTM Call Long OTM Put Iron Butterfly

0

Payoff

Payoff

Payoff

10

10

20

20

30

20

40

Short OTM Call Short OTM Put Long Further OTM Call Long Further OTM Put Iron Condor

40

60

50

30

0 20 40 60 80 100

0 20 40 60 80 100

0 20 40 60 80 100

Figure A1: Sample Payoffs of Option Strategies. The figure shows illustrative terminal payoffs for the strategy templates used in the paper. Payoffs exclude entry premium. Converting payoff to PNL shifts debit structures downward by the paid premium and credit structures upward by the received premium.

A.2 Unconditional Trading Rules

B: Call PNL/Underlying, 16:00 ET Previous Day

A: Call Returns, 16:00 ET Previous Day

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.6

75

0.4

50

25

0.2

% of Option Mid-price

% of Underlying

0

0.0

25

0.2

50

75

0.4

100

0.6

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

D: Put PNL/Underlying, 16:00 ET Previous Day

C: Put Returns, 16:00 ET Previous Day

Median 25th Percentile 75th Percentile Mean

0.4

40

20

0.2

0

0.0

% of Option Mid-price

% of Underlying

20

0.2

40

60

0.4

80

Median 25th Percentile 75th Percentile Mean

0.6

100

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

Figure A2: Option Returns, 16:00 ET on the Previous Day to Next-Day Expiry. The figure provides statistics on profitability of call and put option buying at 16:00 ET on the previous day and holding to expiry at 16:00 ET on the next day. These contracts are one day from expiry at entry and become 0DTE on the following morning. Panels on the left show realized return in % relative to option mid-price. Panels on the right show option realized profit (payoff - mid-price) per one unit of underlying relative to underlying price, in %. Bars show mean values, and each bar is accompanied by median, 25th and 75th percentiles. X-axis labels show moneyness of the analyzed options. The sample period is from 09/2016 to February 2, 2026.

B: Call PNL/Underlying, 13:00 ET

A: Call Returns, 13:00 ET

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

60

0.2

40

0.1

20

% of Option Mid-price

0

% of Underlying

0.0

20

40

0.1

60

0.2

80

100

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

D: Put PNL/Underlying, 13:00 ET

C: Put Returns, 13:00 ET

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.2

40

20

0.1

0

% of Option Mid-price

0.0

% of Underlying

20

40

0.1

60

0.2

80

100

0.3

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

Figure A3: 0DTE Option Returns, 13:00 ET to Expiry. The figure provides statistics on profitability of naked 0DTE call and put option buying at 13:00 ET and holding to expiry at 16:00 ET. Panels on the left show realized return in % relative to option mid-price. Panels on the right show option realized profit (payoff - mid-price) per one unit of underlying relative to underlying price, in %. Bars show mean values, and each bar is accompanied by median, 25th and 75th percentiles. X-axis labels show moneyness of the analyzed options. The sample period is from 09/2016 to February 2, 2026.

B: Call PNL/Underlying, 15:00 ET

A: Call Returns, 15:00 ET

60

Median 25th Percentile 75th Percentile Mean

0.10

40

20

0.05

0

% of Option Mid-price

% of Underlying

0.00

20

0.05

40

0.10

60

80

Median 25th Percentile 75th Percentile Mean

0.15

100

0.20

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

D: Put PNL/Underlying, 15:00 ET

C: Put Returns, 15:00 ET

60

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.15

40

0.10

20

0.05

0

% of Option Mid-price

% of Underlying

0.00

20

0.05

40

60

0.10

80

0.15

100

0.20

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

100.000

100.100

100.200

100.300

100.400

100.500

100.600

100.700

100.800

100.900

101.000

101.100

101.200

101.300

101.400

101.500

101.600

101.700

101.800

101.900

102.000

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

98.000

98.100

98.200

98.300

98.400

98.500

98.600

98.700

98.800

98.900

99.000

99.100

99.200

99.300

99.400

99.500

99.600

99.700

99.800

99.900

Figure A4: 0DTE Option Returns, 15:00 ET to Expiry. The figure provides statistics on profitability of naked 0DTE call and put option buying at 15:00 ET and holding to expiry at 16:00 ET. Panels on the left show realized return in % relative to option mid-price. Panels on the right show option realized profit (payoff - mid-price) per one unit of underlying relative to underlying price, in %. Bars show mean values, and each bar is accompanied by median, 25th and 75th percentiles. X-axis labels show moneyness of the analyzed options. The sample period is from 09/2016 to February 2, 2026.

A: Strangle PNL/Underlying

B: Iron Butterfly/ Condor PNL/Underlying

0.3

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.3

0.2

0.2

0.1

0.1

% of Underlying

% of Underlying

0.0

0.0

0.1

0.1

0.2

0.2

0.3

0.3

0.4

0.995/1/1.005

0.99/1/1.01

0.98/1/1.02

0.995/0.997/1.003/1.005

0.99/0.995/1.005/1.01

0.98/0.99/1.01/1.02

1/1

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

C: Risk Reversal PNL/Underlying

Median 25th Percentile 75th Percentile Mean

0.150

0.125

0.100

% of Underlying

0.075

0.050

0.025

0.000

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

D: Bull Call Spread PNL/Underlying

E: Bear Put Spread PNL/Underlying

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.6

0.4

0.4

0.2

0.2

% of Underlying

% of Underlying

0.0

0.0

0.2

0.2

0.4

0.4

0.6

1/1.005

1/1.015

0.995/1

0.985/1

1/1.01

1/1.02

0.99/1

0.98/1

0.995/1.005

0.985/1.015

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

0.99/1.01

0.98/1.02

F: Call Ratio Spread PNL/Underlying

G: Put Ratio Spread PNL/Underlying

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.6

0.4

0.4

0.2

0.2

% of Underlying

% of Underlying

0.0

0.0

0.2

0.2

0.4

0.4

0.6

1/1.005

1/1.01

1/1.015

1/1.02

0.995/1

0.99/1

0.985/1

0.98/1

0.995/1.005

0.985/1.015

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

0.99/1.01

0.98/1.02

Figure A5: Static Option Strategies, 16:00 ET on the Previous Day to Next-Day Expiry. The figure provides statistics on profitability of several well-known option strategies based on short-dated call and put options; positions are taken at 16:00 ET on the previous day and held to expiry at 16:00 ET on the next day. These positions are one day from expiry at entry. All panels show option strategy realized profit (payoff - mid-price) per one unit of underlying relative to the underlying price, in %. Bars show mean values, and each bar is accompanied by median, 25th and 75th percentiles. X-axis labels show combination of moneyness for options used for a strategy. The sample period is from 09/2016 to February 2, 2026.

A: Strangle PNL/Underlying

B: Iron Butterfly/ Condor PNL/Underlying

0.10

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.15

0.05

0.10

0.00

% of Underlying

% of Underlying

0.05

0.05

0.00

0.10

0.05

0.15

0.10

0.20

0.995/1/1.005

0.99/1/1.01

0.98/1/1.02

0.995/0.997/1.003/1.005

0.99/0.995/1.005/1.01

0.98/0.99/1.01/1.02

1/1

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

C: Risk Reversal PNL/Underlying

Median 25th Percentile 75th Percentile Mean

0.020

0.015

% of Underlying

0.010

0.005

0.000

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

D: Bull Call Spread PNL/Underlying

E: Bear Put Spread PNL/Underlying

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.2

0.2

0.1

0.1

% of Underlying

% of Underlying

0.0

0.0

0.1

0.1

0.2

0.2

1/1.005

1/1.015

0.995/1

0.985/1

1/1.01

1/1.02

0.99/1

0.98/1

0.995/1.005

0.985/1.015

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

0.99/1.01

0.98/1.02

F: Call Ratio Spread PNL/Underlying

G: Put Ratio Spread PNL/Underlying

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.2

0.2

0.1

0.1

% of Underlying

% of Underlying

0.0

0.0

0.1

0.1

0.2

0.2

1/1.005

1/1.01

1/1.015

1/1.02

0.995/1

0.99/1

0.985/1

0.98/1

0.995/1.005

0.985/1.015

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

0.99/1.01

0.98/1.02

Figure A6: 0DTE Static Option Strategies, 13:00 ET to Expiry. The figure provides statistics on profitability of several well-known option strategies based on 0DTE call and put options; positions are taken at 13:00 ET and held to expiry at 16:00 ET. All panels show option strategy realized profit (payoff - mid-price) per one unit of underlying relative to the underlying price, in %. Bars show mean values, and each bar is accompanied by median, 25th and 75th percentiles. X-axis labels show combination of moneyness for options used for a strategy. The sample period is from 09/2016 to February 2, 2026.

A: Strangle PNL/Underlying

B: Iron Butterfly/ Condor PNL/Underlying

0.125

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.050

0.100

0.025

0.075

0.050

0.000

% of Underlying

% of Underlying

0.025

0.025

0.000

0.050

0.025

0.075

0.050

0.100

0.075

0.125

0.995/1/1.005

0.99/1/1.01

0.98/1/1.02

0.995/0.997/1.003/1.005

0.99/0.995/1.005/1.01

0.98/0.99/1.01/1.02

1/1

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

C: Risk Reversal PNL/Underlying

D: Bull Call Spread PNL/Underlying

0.007

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.10

0.006

0.005

0.05

% of Underlying

% of Underlying

0.004

0.00

0.003

0.05

0.002

0.10

0.001

0.15

0.000

1/1.005

1/1.015

1/1.01

1/1.02

0.995/1.005

0.985/1.015

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

0.99/1.01

0.98/1.02

E: Bear Put Spread PNL/Underlying

Median 25th Percentile 75th Percentile Mean

0.15

0.10

0.05

% of Underlying

0.00

0.05

0.10

0.15

0.995/1

0.985/1

0.99/1

0.98/1

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

F: Call Ratio Spread PNL/Underlying

G: Put Ratio Spread PNL/Underlying

Median 25th Percentile 75th Percentile Mean

Median 25th Percentile 75th Percentile Mean

0.15

0.10

0.10

0.05

0.05

% of Underlying

% of Underlying

0.00

0.00

0.05

0.05

0.10

0.10

0.15

0.15

1/1.005

1/1.01

1/1.015

1/1.02

0.995/1

0.99/1

0.985/1

0.98/1

0.995/1.005

0.985/1.015

0.995/1.005

0.985/1.015

0.99/1.01

0.98/1.02

0.99/1.01

0.98/1.02

Figure A7: 0DTE Static Option Strategies, 15:00 ET to Expiry. The figure provides statistics on profitability of several well-known option strategies based on 0DTE call and put options; positions are taken at 15:00 ET and held to expiry at 16:00 ET. All panels show option strategy realized profit (payoff - mid-price) per one unit of underlying relative to the underlying price, in %. Bars show mean values, and each bar is accompanied by median, 25th and 75th percentiles. X-axis labels show combination of moneyness for options used for a strategy. The sample period is from 09/2016 to February 2, 2026.

Strategy Moneyness Count Mean Volatility Min 1% 25% 50% 75% 99% Max Skew SR, p.a.

Strangle/Straddle 1/1 344 0.0263 0.59 -1.72 -0.96 -0.33 -0.08 0.31 2.10 2.85 1.15 0.71 0.995/1.005 344 0.0212 0.50 -1.40 -0.79 -0.25 -0.09 0.19 2.01 2.78 1.78 0.67 0.99/1.01 344 0.0008 0.38 -1.02 -0.49 -0.16 -0.04 -0.01 1.77 2.58 2.90 0.04 0.985/1.015 344 -0.0029 0.27 -0.73 -0.34 -0.09 -0.02 -0.01 1.43 2.26 4.56 -0.17 0.98/1.02 344 -0.0049 0.18 -0.50 -0.28 -0.04 -0.01 -0.00 1.05 1.86 6.29 -0.42 Iron Butterfly/Condor 0.995/1/1.005 344 -0.0051 0.16 -0.24 -0.21 -0.11 -0.07 0.11 0.36 0.39 0.89 -0.52 0.99/1/1.01 344 -0.0254 0.32 -0.71 -0.59 -0.30 -0.05 0.24 0.63 0.70 0.24 -1.26 0.98/1/1.02 344 -0.0312 0.50 -1.48 -1.19 -0.34 0.04 0.31 0.88 1.22 -0.50 -0.99 0.995/0.997/1.003/1.005 344 -0.0041 0.09 -0.14 -0.13 -0.07 -0.04 0.08 0.16 0.17 0.46 -0.76 0.99/0.995/1.005/1.01 344 -0.0203 0.20 -0.47 -0.42 -0.21 0.04 0.13 0.31 0.37 -0.23 -1.64 0.98/0.99/1.01/1.02 344 -0.0057 0.26 -0.88 -0.79 0.01 0.04 0.13 0.34 0.53 -1.64 -0.35 Risk Reversal 0.995/1.005 344 -0.0001 0.68 -2.84 -1.97 -0.11 0.01 0.09 2.32 3.52 0.24 -0.00 0.99/1.01 344 0.0105 0.46 -2.35 -1.46 0.00 0.01 0.03 1.83 3.04 0.65 0.36 0.985/1.015 344 0.0116 0.30 -1.84 -0.95 0.00 0.01 0.02 1.35 2.54 1.56 0.61 0.98/1.02 344 0.0134 0.19 -1.32 -0.45 0.00 0.00 0.01 0.85 2.02 3.08 1.09 Bull Call Spread 1/1.005 344 0.0000 0.22 -0.26 -0.23 -0.20 -0.13 0.27 0.34 0.37 0.41 0.00 1/1.01 344 0.0049 0.37 -0.46 -0.41 -0.29 -0.18 0.31 0.75 0.80 0.78 0.21 1/1.015 344 0.0062 0.45 -0.61 -0.54 -0.32 -0.19 0.26 1.13 1.21 1.09 0.22 1/1.02 344 0.0063 0.50 -0.71 -0.63 -0.33 -0.19 0.24 1.49 1.59 1.32 0.20 0.995/1.005 344 -0.0049 0.41 -0.56 -0.55 -0.50 0.04 0.46 0.51 0.51 -0.10 -0.19 0.99/1.01 344 -0.0161 0.68 -1.12 -1.06 -0.63 0.03 0.55 1.01 1.02 -0.08 -0.38 0.985/1.015 344 -0.0174 0.82 -1.65 -1.55 -0.63 0.04 0.56 1.50 1.52 -0.08 -0.34 0.98/1.02 344 -0.0195 0.91 -2.05 -2.02 -0.63 0.05 0.57 1.96 2.03 -0.12 -0.34 Call Ratio Spread 1/1.005 344 -0.0105 0.35 -2.89 -1.55 -0.11 0.02 0.17 0.52 0.59 -3.47 -0.47 1/1.01 344 -0.0008 0.35 -2.21 -0.89 -0.22 -0.15 0.19 0.74 0.81 -0.38 -0.03 1/1.015 344 0.0018 0.42 -1.39 -0.44 -0.31 -0.19 0.26 1.13 1.19 1.01 0.07 1/1.02 344 0.0020 0.47 -0.62 -0.53 -0.33 -0.19 0.25 1.47 1.53 1.31 0.07 0.995/1.005 344 -0.0155 0.42 -2.69 -1.34 -0.32 -0.01 0.30 0.74 0.81 -1.27 -0.59 0.99/1.01 344 -0.0218 0.62 -1.88 -1.02 -0.61 0.02 0.47 1.08 1.17 -0.10 -0.56 0.985/1.015 344 -0.0218 0.78 -1.52 -1.50 -0.62 0.03 0.50 1.48 1.56 -0.13 -0.44 0.98/1.02 344 -0.0237 0.88 -2.01 -1.97 -0.61 0.05 0.56 1.86 1.95 -0.20 -0.43 Bear Put Spread 0.995/1 344 0.0051 0.22 -0.27 -0.22 -0.18 -0.14 0.29 0.36 0.38 0.56 0.36 0.99/1 344 0.0205 0.38 -0.40 -0.38 -0.28 -0.17 0.34 0.80 0.86 0.83 0.85 0.985/1 344 0.0230 0.48 -0.53 -0.50 -0.33 -0.18 0.30 1.17 1.31 1.11 0.77 0.98/1 344 0.0249 0.54 -0.64 -0.57 -0.34 -0.18 0.29 1.56 1.67 1.36 0.74 0.995/1.005 344 0.0058 0.41 -0.58 -0.51 -0.46 -0.04 0.50 0.55 0.56 0.10 0.22 0.99/1.01 324 0.0066 0.68 -1.02 -1.01 -0.58 -0.06 0.63 1.06 1.12 0.10 0.15 0.985/1.015 298 0.0079 0.85 -1.52 -1.50 -0.62 -0.09 0.64 1.54 1.65 0.13 0.15 0.98/1.02 272 -0.0066 0.93 -2.03 -1.98 -0.58 -0.10 0.63 2.02 2.05 0.13 -0.11 Put Ratio Spread 0.995/1 344 -0.0055 0.33 -2.22 -1.28 -0.08 0.01 0.16 0.48 0.61 -2.92 -0.26 0.99/1 344 0.0254 0.34 -1.52 -0.58 -0.19 -0.13 0.22 0.81 0.97 0.44 1.17 0.985/1 344 0.0302 0.42 -0.70 -0.37 -0.28 -0.17 0.32 1.14 1.26 1.13 1.13 0.98/1 344 0.0340 0.51 -0.48 -0.47 -0.33 -0.18 0.29 1.54 1.68 1.37 1.06 0.995/1.005 344 -0.0049 0.39 -2.00 -1.05 -0.25 -0.04 0.30 0.68 0.81 -0.85 -0.20 0.99/1.01 324 0.0119 0.61 -1.16 -0.98 -0.48 -0.02 0.51 1.19 1.40 0.15 0.31 0.985/1.015 298 0.0145 0.79 -1.49 -1.46 -0.57 -0.06 0.66 1.56 1.64 0.07 0.29 0.98/1.02 272 0.0052 0.91 -2.00 -1.91 -0.58 -0.09 0.64 1.99 2.24 0.10 0.09

Table A1: 0DTE Static Option Strategies Performance. The table shows the summary statistics for the holding-period PNL of several well-known option strategies based on 0DTE call and put options; positions are taken at 10:00 ET and held to expiry at 16:00 ET. The statistics are based on option strategies' realized profit per one unit of underlying relative to underlying price (payoff −mid price)/underlying price × 100%. The SR, p.a. is the Sharpe Ratio annualized by scaling it up by √

252. The sample period is from 01/2022 to 12/2023.

Strategy Moneyness Count Mean Volatility Min 1% 25% 50% 75% 99% Max Skew SR, p.a.

Strangle/Straddle 1/1 421 -0.0127 0.54 -1.17 -0.90 -0.28 -0.08 0.15 1.70 6.04 4.73 -0.37 0.995/1.005 421 -0.0106 0.48 -1.25 -0.66 -0.13 -0.07 -0.03 1.64 6.02 6.68 -0.35 0.99/1.01 421 -0.0026 0.41 -1.10 -0.50 -0.06 -0.02 -0.01 1.47 5.93 9.38 -0.10 0.985/1.015 421 0.0056 0.36 -1.18 -0.33 -0.02 -0.01 -0.01 1.20 5.78 11.40 0.24 0.98/1.02 421 0.0100 0.32 -1.11 -0.20 -0.01 -0.00 -0.00 0.85 5.58 13.43 0.49 Iron Butterfly/Condor 0.995/1/1.005 421 0.0021 0.16 -0.28 -0.25 -0.14 -0.04 0.15 0.34 0.40 0.40 0.20 0.99/1/1.01 421 0.0101 0.28 -0.71 -0.60 -0.19 0.03 0.23 0.56 0.63 -0.30 0.57 0.98/1/1.02 421 0.0227 0.37 -1.70 -1.26 -0.17 0.07 0.26 0.73 0.87 -1.12 0.97 0.995/0.997/1.003/1.005 421 0.0021 0.09 -0.16 -0.15 -0.08 0.03 0.07 0.15 0.16 -0.17 0.39 0.99/0.995/1.005/1.01 421 0.0080 0.16 -0.47 -0.42 -0.01 0.05 0.09 0.28 0.33 -1.17 0.82 0.98/0.99/1.01/1.02 421 0.0126 0.15 -0.99 -0.86 0.01 0.02 0.05 0.27 0.51 -3.78 1.31 Risk Reversal 0.995/1.005 421 0.0075 0.60 -4.43 -1.75 0.01 0.02 0.04 1.17 8.28 4.68 0.20 0.99/1.01 421 0.0059 0.49 -3.89 -1.25 0.01 0.01 0.02 0.68 7.80 7.81 0.19 0.985/1.015 421 0.0072 0.43 -3.36 -0.76 0.00 0.01 0.01 0.19 7.32 10.49 0.27 0.98/1.02 421 0.0073 0.38 -2.86 -0.27 0.00 0.00 0.01 0.07 6.83 12.92 0.31 Bull Call Spread 1/1.005 421 0.0023 0.20 -0.25 -0.23 -0.17 -0.10 0.21 0.34 0.37 0.51 0.18 1/1.01 421 -0.0009 0.28 -0.45 -0.40 -0.21 -0.12 0.18 0.72 0.84 0.98 -0.05 1/1.015 421 -0.0057 0.31 -0.60 -0.49 -0.21 -0.12 0.17 1.00 1.19 1.20 -0.29 1/1.02 421 -0.0079 0.33 -0.70 -0.54 -0.21 -0.12 0.17 1.08 1.55 1.37 -0.38 0.995/1.005 421 0.0067 0.36 -0.57 -0.55 -0.30 0.04 0.35 0.50 0.51 -0.17 0.29 0.99/1.01 421 0.0079 0.52 -1.10 -1.07 -0.29 0.05 0.37 0.99 1.01 -0.24 0.24 0.985/1.015 421 0.0081 0.59 -1.62 -1.53 -0.30 0.06 0.38 1.43 1.51 -0.35 0.22 0.98/1.02 421 0.0087 0.62 -2.13 -2.02 -0.29 0.06 0.38 1.63 2.00 -0.47 0.22 Call Ratio Spread 1/1.005 421 0.0038 0.39 -6.89 -0.49 -0.12 -0.05 0.17 0.43 0.75 -13.36 0.16 1/1.01 421 -0.0025 0.41 -6.33 -0.28 -0.19 -0.12 0.18 0.73 0.81 -8.43 -0.10 1/1.015 421 -0.0121 0.41 -5.70 -0.37 -0.21 -0.12 0.17 0.97 1.33 -5.64 -0.46 1/1.02 421 -0.0166 0.40 -5.01 -0.49 -0.22 -0.12 0.17 1.11 1.49 -3.73 -0.65 0.995/1.005 421 0.0082 0.46 -6.67 -0.52 -0.25 0.07 0.29 0.58 0.84 -7.25 0.28 0.99/1.01 421 0.0063 0.58 -5.91 -1.05 -0.29 0.06 0.37 1.01 1.11 -2.66 0.17 0.985/1.015 421 0.0018 0.63 -5.12 -1.51 -0.29 0.06 0.38 1.36 1.94 -1.46 0.04 0.98/1.02 421 0.0001 0.65 -4.28 -2.00 -0.28 0.06 0.38 1.57 2.22 -1.02 0.00 Bear Put Spread 0.995/1 421 -0.0043 0.20 -0.23 -0.20 -0.15 -0.12 0.15 0.38 0.40 0.89 -0.35 0.99/1 421 -0.0091 0.30 -0.43 -0.34 -0.20 -0.15 0.11 0.81 0.86 1.37 -0.48 0.985/1 421 -0.0126 0.36 -0.61 -0.44 -0.22 -0.16 0.09 1.22 1.35 1.73 -0.55 0.98/1 421 -0.0148 0.39 -0.75 -0.50 -0.22 -0.16 0.09 1.61 1.85 2.07 -0.59 0.995/1.005 419 -0.0061 0.36 -0.50 -0.50 -0.35 -0.04 0.31 0.55 0.58 0.17 -0.27 0.99/1.01 410 -0.0111 0.52 -1.02 -0.99 -0.37 -0.05 0.30 1.06 1.11 0.23 -0.34 0.985/1.015 398 -0.0145 0.59 -1.52 -1.46 -0.38 -0.05 0.29 1.54 1.63 0.33 -0.39 0.98/1.02 395 -0.0138 0.63 -1.99 -1.68 -0.38 -0.06 0.29 2.03 2.13 0.47 -0.35 Put Ratio Spread 0.995/1 421 0.0047 0.33 -3.54 -1.29 -0.08 -0.04 0.14 0.58 0.91 -5.00 0.23 0.99/1 421 -0.0049 0.32 -2.85 -0.48 -0.17 -0.13 0.12 0.76 0.91 -1.25 -0.24 0.985/1 421 -0.0117 0.35 -2.09 -0.33 -0.21 -0.15 0.10 1.11 1.23 1.03 -0.54 0.98/1 421 -0.0161 0.36 -1.27 -0.39 -0.22 -0.16 0.09 1.19 1.75 1.79 -0.71 0.995/1.005 419 0.0029 0.40 -3.29 -1.08 -0.26 -0.01 0.31 0.67 0.99 -2.00 0.11 0.99/1.01 410 -0.0068 0.50 -2.40 -0.96 -0.33 -0.03 0.31 1.02 1.33 -0.08 -0.22 0.985/1.015 398 -0.0140 0.55 -1.49 -1.39 -0.37 -0.04 0.29 1.45 1.61 0.30 -0.40 0.98/1.02 395 -0.0155 0.59 -1.94 -1.35 -0.38 -0.06 0.29 1.52 2.09 0.33 -0.42

Table A2: 0DTE Static Option Strategies Performance. The table shows the summary statistics for the holding-period PNL of several well-known option strategies based on 0DTE call and put options; positions are taken at 10:00 ET and held to expiry at 16:00 ET. The statistics are based on option strategies' realized profit per one unit of underlying relative to underlying price (payoff −mid price)/underlying price × 100%. The SR, p.a. is the Sharpe Ratio annualized by scaling it up by √

252. The sample period is from 01/2024 to February 2, 2026.

A.3 Additional Conditional Tables

Symbol Family Construction (10:00 ET) Feature nature hi Liquidity P l |ql| basl/2 Half-spread execution-cost proxy at strategy level di Liquidity P l |ql|(BidSzl + AskSzl) Displayed depth available at quoted prices ρi Liquidity P l |ql| basl/|midl| Relative spread friction normalized by option price vi Flow P l |ql| V oll Traded volume intensity over strategy legs

f∆ i Flow Leg-sum of |ql|V oll|∆l|100Sl Directional traded notional in delta units fΓ i Flow Leg-sum of |ql|V oll|Γl|100S2 l Convexity traded notional in gamma dollars

fν i Flow Leg-sum of |ql|V oll|νl|100 Vol-sensitivity traded notional in vega units gOI,n i GEX Leg-sum of qlOIlΓl100S2 l Signed open-interest-weighted gamma exposure proxy

gOI,a i GEX Leg-sum of |ql|OIl|Γl|100S2 l Absolute scale of OI-weighted gamma exposure gΓ,n i GEX P l ql Γl Signed structural gamma from strategy-leg mix gΓ,a i GEX P l |ql| |Γl| Absolute structural gamma magnitude

gOI,n i (|gOI,a i | + 1)−1 Normalized sign and balance of OI gamma exposure

BΓ i GEX fΓ i (|gOI,a i | + 1)−1 Traded gamma pressure scaled by OI gamma base

RΓ i Flow + GEX

Ti Liquidity hi (di + 1)−1 Cost per displayed depth unit (liquidity tightness) Mi,t Baseline |Ls,m|−1 P l Ml Structure location on the moneyness grid P (1), ¯P (5),

Lag-1 plus rolling 5-day mean and std within each strategy-moneyness series Short-horizon persistence and local volatility of strategy PNL σ(5) P Baseline

IVt, ISt Market controls SPXW 0DTE VIX-style level and up-minus-down component at 10:00 ET Entry-time implied state: overall variance level and asymmetry Slope and lagged realized controls Market controls Slope proxies and lagged realized controls Recent realized state and smile-shape dynamics (no look-ahead)

Table A3: Conditional Predictor Dictionary for Equations in This Subsection. The table maps the compact notation used in the feature equations to construction formulas and economic interpretation. Family labels are aligned with model-zoo feature groups (Baseline, Flow, GEX, Liquidity); market controls are included in all specifications. Duplicate-key preprocessing at (datetime, option type, moneyness) uses means for price/Greek- like fields (including open interest) and sums for traded/depth flow fields before leg aggregation.

Strangle Irons R/Reversal C/Spread C/R/Spread P/Spread P/R/Spread

Panel Realized Variance RV 0.012 -0.003** 0.009 0.002 -0.008 -0.000 -0.001 (1.210) (-2.117) (0.607) (0.466) (-0.839) (-0.044) (-0.449) Combo FE Yes Yes Yes Yes Yes Yes Yes R2, Adj. 0.082 0.007 0.037 0.001 0.016 -0.001 0.000 Obs. 5,514 6,607 4,414 8,828 8,828 7,082 7,082 Panel Realized Variance and Skewness RV 0.010 -0.004** -0.007 -0.011** -0.012* 0.012*** 0.004 (1.222) (-2.552) (-0.947) (-2.103) (-1.699) (2.789) (0.539) RS 0.014 0.006 0.128*** 0.105*** 0.033 -0.098*** -0.042* (0.411) (1.239) (5.131) (4.275) (0.899) (-4.771) (-1.776) Combo FE Yes Yes Yes Yes Yes Yes Yes R2, Adj. 0.089 0.010 0.606 0.233 0.038 0.253 0.048 Obs. 5,514 6,607 4,414 8,828 8,828 7,082 7,082 Panel Implied and Realized Variances IV -0.042*** 0.017*** -0.030 -0.002 0.031** -0.005 -0.001 (-2.682) (4.636) (-1.157) (-0.239) (2.348) (-0.396) (-0.143) RV 0.064** -0.024*** 0.046 0.004 -0.047* 0.006 0.000 (2.468) (-4.918) (1.179) (0.287) (-1.902) (0.342) (0.017) Combo FE Yes Yes Yes Yes Yes Yes Yes R2, Adj. 0.201 0.041 0.087 -0.000 0.053 -0.000 -0.000 Obs. 5,509 6,601 4,410 8,820 8,820 7,074 7,074 Panel Implied and Realized Variances and Skewness IV -0.038*** 0.019*** -0.007 0.012 0.032*** -0.020* -0.007 (-3.791) (4.441) (-0.871) (1.116) (2.904) (-1.821) (-0.531) IS -0.092*** 0.012 -0.086*** 0.026 0.114*** -0.034* -0.032 (-3.118) (1.627) (-4.941) (1.202) (3.465) (-1.699) (-1.358) RV 0.056*** -0.027*** -0.000 -0.026 -0.051*** 0.037** 0.012 (5.241) (-4.550) (-0.015) (-1.462) (-2.952) (2.046) (0.622) RS -0.016 0.016** 0.110*** 0.109*** 0.060** -0.112*** -0.050* (-1.051) (2.514) (9.195) (3.942) (2.342) (-4.013) (-1.776) Combo FE Yes Yes Yes Yes Yes Yes Yes R2, Adj. 0.313 0.057 0.693 0.236 0.169 0.286 0.061 Obs. 5,509 6,601 4,410 8,820 8,820 7,074 7,074

Table A4: Option Strategies PNL vs. Implied and Realized Moments. The table shows the results of regressing realized PNL of option strategies (15:00 ET to expiry at 16:00 ET) on implied and realized distribution moments. PNL is specified per one unit of underlying relative to underlying price (payoff −mid price)/underlying price × 100%. The result in each column is based on a pooled regression of strategy PNL for several moneyness combinations, including combo fixed effects (Combo FE) and date-clustered standard errors. The sample period is from 09/2016 to February 2, 2026.
