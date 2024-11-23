import { marked } from "marked"

const en = `
# OS Privacy Policy
Check out the Privacy Policy of Parch Linux (the operating system).

<!-- This document refers to the privacy policy of the operating system. If you are looking for the privacy policy of the website, please refer to the [privacy policy](/privacy-policy) page. -->

When you use the operating system, you agree to the terms of this privacy policy. If you do not agree with the terms of this privacy policy, 
please do not use the operating system.

## What information do we collect?
No information is collected by the operating system, in any way, shape or form.

## How do we use the information we collect?
Since no information is collected, no information is used.

## How do we protect your information?
Since no information is collected, no information is protected.
`

const fa = `
# سیاست حفظ حریم خصوصی سیستم‌عامل
سیاست حفظ حریم خصوصی پارچ لینوکس (سیستم‌عامل) را بررسی کنید.

<!-- این سند به سیاست حفظ حریم خصوصی سیستم‌عامل اشاره دارد. اگر به دنبال سیاست حفظ حریم خصوصی وب‌سایت هستید، لطفاً به صفحه [سیاست حفظ حریم خصوصی](/privacy-policy) مراجعه کنید. -->

هنگامی که از سیستم‌عامل استفاده می‌کنید، با شرایط این سیاست حفظ حریم خصوصی موافقت می‌کنید. اگر با شرایط این سیاست حفظ حریم خصوصی موافق نیستید، لطفاً از سیستم‌عامل استفاده نکنید.

## چه اطلاعاتی جمع‌آوری می‌کنیم؟
هیچ اطلاعاتی به هیچ شکلی توسط سیستم‌عامل جمع‌آوری نمی‌شود.

## چگونه از اطلاعات جمع‌آوری شده استفاده می‌کنیم؟
از آنجا که هیچ اطلاعاتی جمع‌آوری نمی‌شود، هیچ اطلاعاتی نیز استفاده نمی‌شود.

## چگونه از اطلاعات شما محافظت می‌کنیم؟
از آنجا که هیچ اطلاعاتی جمع‌آوری نمی‌شود، هیچ اطلاعاتی نیز محافظت نمی‌شود.
`

export default {
  en: marked.parse(en),
  fa: marked.parse(fa)
}
