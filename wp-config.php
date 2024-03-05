<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'S9w,fkPAl~|uTVpF8+83 9fw3d-_V`a39^hJ*.mN AjT-xfWTM0B 5f#/XWa2Mqo' );
define( 'SECURE_AUTH_KEY',   '(nTYXRH5yp[qg^yK>o;h9BQsH,Liw2E#&<F~9cH)og@);9|{G3b yGJx7U$Ji2`?' );
define( 'LOGGED_IN_KEY',     'T`HvSZ5pC1(S<vb6.[c!?Y%uLGvNrh+1fg,(0;)G+#$!|z(IytW)0j+0sJ[>n =b' );
define( 'NONCE_KEY',         'hzJ.wMQ}@B;Nvn~VIyqs%u~Xd9{FthE+;`l49}h||3+[(xa*u>g8t<lye}2$P1kT' );
define( 'AUTH_SALT',         '?<yk+bBbyPBh+{1`k&+!-Q]XEDYropG0T,U[D?n68zP}Q.ZZAz{YbtLc9%qWXsiH' );
define( 'SECURE_AUTH_SALT',  'yNG8Q8KgwSop}PH_!|H:GH0T4iHb[sQtb#{0K[#r[SOm2sk]/DKi$K3FI<./yoJj' );
define( 'LOGGED_IN_SALT',    'M?&M_ZoE[;;63ae1d|Vwy-1q+ulDTigC3U SGReilFzzW=UD.v?+Rc?(p_yM>7]7' );
define( 'NONCE_SALT',        'H%Qq,E~#&]Ac#aw.DL&8Xo[H[HVQJ)Q4Ubfo?W&c1.(Kb9A9GBP(y<=[m?S~kUd/' );
define( 'WP_CACHE_KEY_SALT', ':nVjC~q1$#m&B n~b-EI#,N~0#m|%>1f$?RL@j`QB3kK0qw_sw!mhNWr`i<#XJNL' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'zadk2020_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
