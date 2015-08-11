=== Plugin Name ===
Contributors: Prefrent, joewils, hansthered
Donate link: http://prefrent.com/
Tags: match, sort, rank, related, related posts, relational, relate, tags, posts, post-types, types, ai, a.i., artificial intelligence, filter, filtering, micro format, context, contextual, contextually, search, data, freeform, construct, descriptors, draws, distance, support-vector, parse, discover, classifier, affinitomics, ai mojo, cognitive, decision support, big data, cookies
 
Requires at least: 3.6
Tested up to: 4.1.1
Stable tag: 1.1.1
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Aimojo™ - Match, Rank, Relate anything! 
**Replaces Affinitomics for Wordpress**

== Description ==

**Aimojo™ (replacing Affinitomics for Wordpress) transforms Wordpress into a hyper-relevant, context aware and intelligent powerhouse in minutes. =Over 10x faster than Affinitomics for Wordpress.**

Using patent-pending feature/tag dimensionalization methods within the Affinitomics Cloud, the plugin creates AI constructs from pages, posts, and custom post types. These constructs are then used to allow information to self-organize based on contextual value. This makes link lists and menus contextual and dynamic - making sites sticky and visitors more likely to convert. Applied to searches (Google CSE), Affinitomics improves results by as much as 9x, imparting context and massively reducing noise.

Categories and traditional tags create flat index structures with little actual relational value. Some plugins try to impart contextual value by either requiring hard-coded relationships or forcing Wordpress to calculate tag counts and concordances in an effort to find contextually valuable matches. Plugins that do the latter cause Wordpress to perform tens of thousands more calculations than normal, bogging servers and slowing performance. Some hosts have banned the use of these plugins.

Aimojo™ for Wordpress uses a RESTful API to communicate with the Affinitomics™ Cloud, storing AI constructs, and calculating contextual relationships and values. Free of the the computational load, Wordpress benefits, becoming a hyper-contextual information system that dynamically molds itself to the users needs.

== Installation ==

1. Download the plugin.
1. Either use the “add new plugin” functionality internal to Wordpress.org in your “Plugins” menu or;
1. Upload the plugin directory “affinitomics” to your /wp-content/plugins/ directory.
1. Activate the plugin through the Plugins menu in WordPress.
1. Go to “Aimojo™” in the left hand control menu.
1. Select “settings” from the bottom of the list.
1. On first use, the plugin generates an anonymous API key that allows it to communicate securely with the Affinitomics Cloud
1. Registering the plugin grants use of a valuable dashboard that allows users to view and manage Affinitomic Transactions
1. Configure Affintomics™ for your site.

= Configure Affinitomics =

1. Install the plugin
1. In the admin panel, find the “Affinitomics” menu (usually below Posts) and select “settings”
1. Make sure that there is an API key present in the field. If the field is empty, or no key is recognized, register the plugin and claim your key via http://affinitomics.com/register 
1. From the resulting page, copy the API key and paste it in the API field in your settings.
1. Next, under “To which Post-types would you like to apply your Affinitomics™?” check the boxes for the post-types you want to use with Affinitomics.
1. Now scroll to the bottom and save changes. Unless you want to configure Google Custom Search (CSE) to work with Affinitomics, you’re done.

= Configure Google CSE integration =

1. In the admin panel, find the “Affinitomics” menu and select “settings”
1. Ensure that the settings for the API URL, API Key, and API Account Domain are configured
1. Ensure that the post types are selected
1. Under “Jump Search select “yes” to apply the Google CSE “JumpSearch” to posts or pages
1. Follow the links to obtain free API / Search credentials from Google.
1. For your Google API Key (separate from your Affinitomics API key above) follow the instructions here [https://cloud.google.com/console](https://cloud.google.com/console)
1. For your Google Custom Search Engine (CSE) ID follow the instructions here [https://developers.google.com/custom-search/](https://developers.google.com/custom-search/)

= NOTE: Existing pages and posts (rather, the Affinitomics placed on them) must be exported to the Affinitomics cloud before any of them will work. = 
1. Under the Affinitomics menu choose “Cloud Export.”
2. Check “Make it so” and wait for a bit. It won’t take too long, but we haven’t bothered to give you a spinner yet, sorry. You’ll see an output list when it’s done.
3. This will only have to be done once, unless you import pages or posts. It’s handled automatically for new pages, posts, and Archetypes.

= Configure individual Posts, Pages, or Archetypes™ =

1. For existing pages or posts, either copy or move tags to the “Descriptors” field in the page or post editor. 
1. If you want like objects to attract like objects in your system, copy the tags to both “Descriptors” and “Draw”.
1. It is a best practice (not a requirement) to include a Descriptor of Person, Place, Thing, Concept or Construct in the Descriptors, especially if the Affinitomics are to be exported later, and shared.
1. Draws are preceded by a plus “+” sign and can be followed by a number from 1 to 5; the greater the draw, the greater the number. If there is no number, it’s value is considered to be “1”. Example; +dogs5 is the highest preference for dogs possible.
1. If a Distance is indicated, it is done in the same manner as a draw; -dogs5 (notice that it is preceded by a minus, “-“ and not a plus, “+”. An attenuation of “5” indicates the highest possible dislike. If there is no number, it’s value is considered to be “1”.
1. If none of the Affinitomic™ Element fields are filled in, the page, post, or Archetype will not be effected by Affinitomics™ - JumpSearch will have no effect, and only shortcodes with overriding Affinitomics™ will function.

= Connect your similar pages with Affinitomics™! =

1. On a page that you would like to add a list of similar posts or pages, simply add the shortcode [afview]
1. an [afview] can be modified with the following options:

limit:           how many results to return

category_filter: only display results from one category (a post can be in multiple categories, this restricts similar results to a single category)

display_title:   just like it sounds, you can hide the title by setting this to "false"

Examples: [afview], [afview limit="4"], [afview category_filter="50"]

To use more than one option at a time, just separate options with a space.

[afview limit=1 display_title="false"]
=Use the following class' to style [afview] display=
* afview
* aftitle
* afsubtitle
* afelement
* afelementurl
* afelementscore

== Frequently Asked Questions ==

= What versions of Wordpress and php are required? =

Aimojo™ requires Wordpress 3.5 or better, and php 5.3 or better.

= How much storage do I get in the Affinitomics™ Cloud =

Users are granted space for 1000 Affinitomic™ constructs and 5,000 transactions per month.
Larger accounts are available at [Prefrent.com](http://prefrent.com). 

= How many “Archetypes” will I need? =
An Affinitomic Archetype can be applied to a post, page, custom post-type, or archetype (Affinitomics’™ custom post type)
So 1000 archetypes could be 50 pages, 900 posts, and 50 ads if you didn’t assign individual Archetypes to members.


== Screenshots ==

1. This shows the settings area under Archetype > settings. Note that the plugin requires and API key from Prefrent. for Jump-search functionality, credentials are required form Google as well.

2. This shows the descriptor, draw, and distance fields and how they are utilized.

3. This is a list of Investment firms sorted by Prefrent’s Archetype - All of them have a history of investing in companies very like ours.

4. This is a JumpSearch from a “Cheese Shop” Archetype, searching for “hat.”


== Changelog ==

=1.0.0=
* Yay! We’ve released Ai•mojo!
* Twilighting support for Affinitomics for Wordpress.
* Over 10x faster than Affinitomics for Wordpress .9.0

== Additional Information ==

Affinitomics vs Tags [also here](http://prefrent.com/affinitomics-u-affinitomics-vs-tags/)

“Affinitomics™ sounds intimidating – It must take lots of training or a PhD to comprehend.” This couldn’t be further from the truth. If you know how tags work, you can use Affinitomics. Skim this article, and you’ll understand Affinitomics and know how to use them. And we promise, no classes, no visits to MIT, and no scientists are required.

When people tag documents or web pages, they generally put everything deemed pertinent into the tags. And since search engines rely on these tags, people involved in search engine optimization often attach quite a number of tags and keywords to the document. These tags – all stored in the same place and separated by commas – are what scientists call a “bag-of-words” or “bag-of-features.” They call them that because there is no structure to the meta-data that the tags provide. Scientists also call this “flat” because all the tags have the same value, and are all used the same way. When a page is searched, the search algorithm usually awards the tags and keywords a higher value if they are also found within the structure of the document. This is called concordance. In the world of intelligent systems, concordance is barely a passing grade. It’s ok for sorting a response from a search engine, but not much else.

Affinitomics™ makes a simple change to this paradigm – the same tags are simply sorted based on their relationship to the subject matter of the document (or picture, or video, or song, etc.). This simple change makes a world of difference. It changes tags from a “bag-of-words” to a “dimensional feature space” – making them much more valuable and useful to any number of machine learning and artificial intelligence algorithms.

How are the tags sorted? That’s a good question with a deceptively simple answer. If you look at any set of tags you’ll discover that there are usually two, and sometimes three types.

1) Some tags describe the subject’s particular features; 2) some describe what the subject goes with or occurs with; and, 3) sometimes, there are tags that describe what the subject doesn’t go with, conflicts with, or dislikes.
By dividing these tags into Descriptors (what it is), Draws (as in drawing closer), and Distances (as in keeping a distance from), the feature space becomes multi-dimensional, thus imparting more information for sorting and classification algorithms. Essentially this makes information self-aware – understanding what it is, what it matches, and what it doesn’t match or is antithetical to. As an example, the following are tags for a St. Bernard Dog: dog, big, k9, furry, eats a lot, good with kids, likes snow, chases cars, chases cats.

It’s easy to derive Affinitomics from these tags. “dog, big, k9, furry” are all easily recognizable as Descriptors. The Draws are easy to recognize as well, and we can take a shortcut in writing them that will differentiate them from Descriptors. They become: +eating, +kids, +snow. We also take a shortcut on what are easy to spot as Distances, and they become: -cars, -cats. By separating the tags into three types of Affinitomics, not only have they become more useful for the computer system, they are actually easier to write and take up less space.

Traditional Tags look like this: 
= dog, big, k9, furry, eats a lot, good with kids, likes snow, chases cars, chases cats =

Whereas the features in an Affinitomic Archetype look like this: 
= dog, big, k9, furry, +eating, +kids, +snow, -cars, -cats =

So now you know how to write Affinitomics, you can see that it takes much less time than writing tags, and by categorizing tags into Descriptors, Draws and Distances, you’ve made the computer much happier.  

= It’s like sorting laundry – it takes the same amount of time and results come out in the wash. With these Affinitomics instead of tags, algorithms can much more quickly determine matches, affinities, and sort values. =

= Extra Credit =

Affinitomics are even more valuable with attenuation – telling the system how much to value Draws and Distances. For example: How much does the dog like to eat?  Or which does it hate more; cars or cats? The attenuated Affinitomics for the St. Bernard answer those questions like this: 
= dog, big, k9, furry, +eating2, +kids, +snow4, -cars2, -cats5 =

You’ll notice that it’s still less data than the tags, even though the Affinitomics now represent a three dimensional feature space which is far more valuable for knowledge retrieval, discovery, and machine learning. Because of this, Affinitomics can be evaluated, sorted, and grouped much faster and more accurately than tags. In addition, since the Affinitomics essentially make the information self-ranking and self-sorting, systems that use Affinitomics don’t require categories. 

There you have it. You now know how to create Affinitomic Archetypes – a fancy way of saying that you understand how and why you should sort your laundry, errr, tags.
