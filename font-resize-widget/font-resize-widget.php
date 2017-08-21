<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://oxfordclub.com
 * @package           Font_Resize_Widget
 *
 * @wordpress-plugin
 * Plugin Name:       Font Resize Widget
 * Plugin URI:        https://google.com
 * Description:       A plugin for a font resizing widget on posts.
 * Version:           1.0.0
 * Author:            Crafton
 * Author URI:        https://google.com
 * Text Domain:       font-resize-widget
 * License:           None
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) { die; }

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-font-resize-widget-activator.php
 */
function activate_font_resize_widget() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-font-resize-widget-activator.php';
    Font_Resize_Widget_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-font-resize-widget-deactivator.php
 */
function deactivate_font_resize_widget() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-font-resize-widget-deactivator.php';
    Font_Resize_Widget_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_font_resize_widget' );
register_deactivation_hook( __FILE__, 'deactivate_font_resize_widget' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-font-resize-widget.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_font_resize_widget() {

    $plugin = new Font_Resize_Widget();
    $plugin->run();

}

run_font_resize_widget();