FROM php:8.4-apache
RUN apt-get update && apt-get install -y libicu-dev libzip-dev unzip git \
    && docker-php-ext-install intl zip pdo pdo_mysql \
    && a2enmod rewrite
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
WORKDIR /var/www/html
COPY . /var/www/html/
ENV APACHE_DOCUMENT_ROOT /var/www/html/web
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN chown -R www-data:www-data /var/www/html
RUN composer install --no-interaction --ignore-platform-reqs || true
