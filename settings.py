__author__ = "Paulo Antunes"
__copyright__ = "Copyright 2018, XTCryptoSignals"
__credits__ = ["Paulo Antunes", ]
__license__ = "GPL"
__version__ = "1.0"
__maintainer__ = "Paulo Antunes"
__email__ = "pjmlantunes@gmail.com"


MONGODB_NAME = 'XTCryptoSignals'

TICKER_SCHEDULE = 10.0  # executed each X seconds
TIMEOUT_PER_SYMBOL_REQUEST = 2.0  # in seconds
TIMEOUT_PER_SYMBOLS_REQUEST = 5.0  # in seconds
SYMBOL_FLOAT_PRECISION = 8

HISTORY_FREQUENCY = (
    '10s', '30s', '1m', '10m', '30m', '1h', '3h', '6h', '12h', '24h'
)

try:
    # local settings
    from settings_local import (
        BINANCE_API_KEY,
        BINANCE_API_SECRET,
    )  # noqa
except ModuleNotFoundError:
    pass

# exchanges settings
from settings_exchanges import (
    BINANCE, UPHOLD, OKEX, IDEX, SWITCHEO, HOTBIT, BIBOX,
    SYMBOLS_PER_EXCHANGE,
)  # noqa

__all__ = [
    'BINANCE_API_KEY', 'BINANCE_API_SECRET',
    'BINANCE', 'UPHOLD', 'OKEX', 'IDEX', 'SWITCHEO', 'HOTBIT', 'BIBOX',
    'SYMBOLS_PER_EXCHANGE',
]
